(function () {

angular.module('public')
.service('UserService', UserService);

function UserService() {
	var service = this;
	var user = null;


	service.addInfo = function( firstName, lastName, 
								email, phone, item, name ){
		user = {
			firstName : firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			item : item,
			name: name
		};
	}

	service.getUser = function() {
		return user;
	}
}

})();