var app = angular.module('traverseApp', [
  'ngRoute'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/trips', {
        controller: 'tripsController',
        templateUrl: 'js/trips/trips.html'
    })
    .when('/auth', {
        controller: 'authController',
        templateUrl: 'js/auth/auth.html'
    })
    // .when('/trips/:tripId', {
    //     controller: 'eventsController',
    //     templateUrl: 'js/events/events.html'
    // })
    .when('/trips/:tripId/events', {
        controller: 'eventsController',
        templateUrl: 'js/events/events.html'
    })
    .when('/trips/:tripId/new_event_partial', {
        controller: 'eventsController',
        templateUrl: 'js/events/new_event_partial.html'
    })


    .otherwise({ redirectTo: '/' })
}]);



// in case we decide to do single event views later:

    // .when('/trips/:tripId/events/:eventId', {
    //     controller: 'eventsController',
    //     templateUrl: 'js/events/event.html'
    // })
