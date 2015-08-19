var app = angular.module('webproject', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: "/home",
			cache: false,
      templateUrl: "templates/home.html",
      controller: "HomeController"
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');
})
.run(function () {

});
