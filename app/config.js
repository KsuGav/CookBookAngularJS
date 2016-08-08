/**
 * Created by Ksu on 05.08.2016.
 */
angular.module('routeApp').config(function ($routeProvider) {
    $routeProvider
     .when("/", {
            templateUrl: "templates/main.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/soups", {
            templateUrl: "templates/soups.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/salads", {
            templateUrl: "templates/salads.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/meat", {
                templateUrl: "templates/meat.html",
                controller: "NavigationCtrl",
                controllerAs: "nav"
            }
        );
    $routeProvider.otherwise('/main');
});