// created by bryce groesbeck

angular.module('ngApp', ['ui.router'])
    .component('toDoComponent', toDoComponent)
    .component('aboutComponent', aboutComponent)
    .controller('mainCtrl', MainCtrl)
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