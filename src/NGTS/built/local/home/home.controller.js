var app;
(function (app) {
    var layout;
    (function (layout) {
        "use strict";
        var HomeController = (function () {
            function HomeController() {
                var vm = this;
                vm.title = "Landing Page";
                vm.copyrightDate = new Date(1, 1, 2015);
                vm.projectName = "TypeScript Angular $resource Walkthrough";
            }
            return HomeController;
        })();
        angular.module("app.home")
            .controller("app.home.HomeController", HomeController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
