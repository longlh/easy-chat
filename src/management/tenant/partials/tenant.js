'use strict';

require('..').controller('tenant.controllers.tenant', [
	'$scope',
	'_tenant',
	'shared.services.event-hub',
	'shared.services.switch-icon',
	function($scope, tenant, Emitter, switchIcon) {
		$scope.tenant = tenant;

		$scope.update = function() {
			$scope.icon = switchIcon.save('processing');

			$scope.tenant.save().then(function() {
				$scope.icon = switchIcon.save('success');

				setTimeout(function() {

					$scope.icon = switchIcon.save();
				});
			});
		};

		function init() {
			$scope.icon = switchIcon.save('save');
		}

		init();
	}
]);
