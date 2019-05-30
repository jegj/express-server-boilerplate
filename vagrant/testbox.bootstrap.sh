#!/bin/bash -e
set -a
LOG=${LOG:-/home/vagrant/express-server-boilerplate/vagrant/tmp/log/boot.log}
set +a

NODE_VER=${NODE_VER:-10.x}
PGVERSION=${PGVERSION:-10}
PGDATABASE=${PGDATABASE:-comlogdb}
PGPORT=${PGPORT:-5433}
PGUSER=${PGUSER:-postgres}
PGPASSWORD=${PGPASSWORD:-devved}
DB_DIR=${DB_DIR:-/home/vagrant/express-server-boilerplate/migrations/}

echo "starting provisioning..."
echo "NODE_VER: ${NODE_VER}"
echo "PGVERSION: ${PGVERSION}"
echo "PGDATABASE: ${PGDATABASE}"
echo "PGPORT: ${PGPORT}"
echo "PGUSER: ${PGUSER}"
echo "PGPASSWORD: ${PGPASSWORD}"

ETH0IP=$(ifconfig -a eth0 | grep "inet addr:")

mkdir -p /vagrant/tmp/log

print_db_usage () {
	echo "Your Postgres environment has been setup"
	echo "Networking: [ $ETH0IP ]"
	echo ""
	echo "  Port: $PGPORT"
	echo "  Database: $PGDATABASE"
	echo "  Username: $PGUSER"
	echo "  Password: $PGPASSWORD"
	echo ""
	echo "psql access to app database user via VM:"
	echo "  vagrant ssh"
	echo "  sudo su - postgres"
	echo "  PGUSER=$PGUSER PGPASSWORD=$PGPASSWORD psql -h localhost $PGDATABASE"
	echo ""
	echo "Env variable for application development:"
	echo "  DATABASE_URL=postgresql://$PGUSER:$PGPASSWORD@*:$PGPORT/$PGDATABASE"
	echo ""
	echo "Local command to access the database via psql:"
	echo "  PGUSER=$PGUSER PGPASSWORD=$PGPASSWORD psql -h localhost -p $PGPORT $PGDATABASE"
	echo ""
	echo "  Getting into the box (terminal):"
	echo "  vagrant ssh"
	echo "  sudo su - postgres"
	echo ""
}

export DEBIAN_FRONTEND=noninteractive

display() {
	echo -e "\n-----> "$0": "$*
}

PROVISIONED_ON=/etc/vm_provision_on_timestamp
if [ -f "$PROVISIONED_ON" ]
then
	echo "VM was already provisioned at: $(cat $PROVISIONED_ON)"
	echo "To run system updates manually login via 'vagrant ssh' and run 'apt-get update && apt-get upgrade'"
	echo ""
	print_db_usage
	exit
fi

display add postgresql apt sources

# Add PostgreSQL Apt repository to get latest stable
PG_REPO_APT_SOURCE=/etc/apt/sources.list.d/pgdg.list
if [ ! -f "$PG_REPO_APT_SOURCE" ]
then
	echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > "$PG_REPO_APT_SOURCE"
	wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
fi


display update apt packages

apt-get update

display install node
apt-get -y install build-essential
curl -sL "https://deb.nodesource.com/setup_$NODE_VER" | sudo -E bash -


display "install node version ${NODE_VER}"
sudo apt-get install -y nodejs

display install openssl dependency
apt-get -y install libssl-dev

# Tag the provision time:
date > "$PROVISIONED_ON"

echo "Successfully created postgres dev virtual machine with Postgres"
echo ""
print_db_usage
