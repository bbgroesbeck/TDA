// created by bryce groesbeck

angular.module('ngApp', ['ui.router', 'ngStorage', 'ngMaterial', 'ngAnimate'])
    .component('toDoComponent', toDoComponent)
    .component('aboutComponent', aboutComponent)

    .controller('mainCtrl', MainCtrl)
    .filter('capitalize', function () {
        return function (input, scope) {
            if (input != null)
                input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
// created by bryce groesbeck
        var homeState = {
            name: 'home',
            url: '/home',
            template: '<to-do-component todo="ctrl.todo"></to-do-component>'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<about-component about="ctrl.about"></about-component>'
        };

// created by bryce groesbeck
        $stateProvider.state(homeState);
        $stateProvider.state(aboutState);


    });
// created by bryce groesbeck