/* lib/error/index.js */
'use strict';

const Stampit = require('stampit');
const optionsCollector = require('./optionscollector');

const GenericRespond = Stampit({
	props: {
		message: '',
		type: null,
		httpstatus : null,
		options: {}
	},
	init({ type = this.type, httpstatus = this.httpstatus, message = this.message, options = this.options }) {
		this.type = type;
		this.httpstatus = httpstatus;
		this.message = message;
		// Collect info for the options object
		const { errorObject, adheaders, props } = optionsCollector(options);
		this.errorObject = errorObject;
		this.adheaders = adheaders;
		this.props = props;
	},
	methods: {
		hasAdHeaders() {
			return Object.keys(this.adheaders).length > 0;
		}
	}
});

module.exports = GenericRespond;
