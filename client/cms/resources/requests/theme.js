app.service('theme', ['$http', function($http) {
	function Requests() {
		this.subtract = function (num1, num2) {
	  		return num1 - num2;
	  	}
	}
  return new Requests();
}]);