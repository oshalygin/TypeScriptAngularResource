(function () {
    angular.module("app.home")
        .config(configuration);
    configuration.$inject = ["$stateProvider", "$urlRouterProvider"];
    function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
            url: "/",
            title: "Home",
            templateUrl: "./application/home/home.html",
            controller: "app.home.HomeController",
            controllerAs: "vm"
        });
    }
})();
