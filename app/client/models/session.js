;(function() {
	'use strict';

	angular.module('easy-chat').factory('/models/session', [
		'/services/model-factory',
		'/models/agent',
		function(ModelFactory, Agent) {
			var Session = ModelFactory.model({
				resource: {
					path: '/api/sessions/current',
					methods: {
						ping: {
							method: 'get'
						},
						get: false,
						delete: false,
						query: false,
						save: false
					}
				},
				instantiation: {
					construct: function() {
						// convert raw data to Agent object
						this.data = new Agent(this.data);
					}
				}
			});

			return Session.class;
		}
	]);
})();
