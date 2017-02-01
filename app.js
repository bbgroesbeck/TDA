// created by bryce groesbeck

angular.module('ngApp', ['ui.router', 'ngStorage', 'ngMaterial', 'ngAnimate'])
    .component('toDoComponent', toDoComponent)
    .component('aboutComponent', aboutComponent)

    .controller('mainCtrl', MainCtrl)
    .filter('capit', function () {
        return function (input) {
            if (input != null) {
                var splitMe = input.split(" ");
                var output = "";

                for (var i = 0; i < splitMe.length; i++) {

                    splitMe[i] = splitMe[i].toLowerCase();
                    splitMe[i] = splitMe[i].substring(0, 1).toUpperCase() + splitMe[i].substring(1);
                }
                output = splitMe.join(" ");

                return output;
            }
            else return input;
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