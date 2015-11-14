/**
 * Created by christina3135 on 11/13/2015.
 */

angular.module('Signup', ['ui.router', 'angular-uuid', 'LocalStorageModule', 'firebase'])
    .constant('firebaseUrl', 'https://dawg-coffee-orders.firebaseio.com/')
    .controller('SignupController', function($scope, $firebaseArray, firebaseUrl, $state) {

    });