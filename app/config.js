/**
 * Created by Ksu on 05.08.2016.
 */
angular.module('routeApp').config(function ($routeProvider) {
    $routeProvider
     .when("/", {
        category: 'main',
            templateUrl: "templates/main.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/soups", {
        category: 'some',
            templateUrl: "templates/soups.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/salads", {
        category: 'some',
            templateUrl: "templates/salads.html",
            controller: "NavigationCtrl",
            controllerAs: "nav"
        })
        .when("/meat", {
        category: 'some',
                templateUrl: "templates/meat.html",
                controller: "NavigationCtrl",
                controllerAs: "nav"
            }
        );
    $routeProvider.otherwise('/main');
});

