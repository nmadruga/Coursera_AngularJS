(function (){
'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', DIController );

	DIController.inject = ['$scope'];

	function DIController( $scope ){

		$scope.name = "";
		$scope.error = "";

		$scope.setError = function () {
			
			var message = "Please enter data first";
			var elements = calculateElements( $scope.name );

			if( 0 < elements && elements <= 3 )
				message = "Enjoy!";
			else if( 0 < elements && 3 < elements )
				message = "Too Much!";

			$scope.error = message;
		};

		function calculateElements( string ){
			if( string.trim() == "" )
				return 0;
			return string.split(',').length
		}
	}



})(); //end IIFE function