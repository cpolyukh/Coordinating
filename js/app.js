/**
 * Created by christina3135 on 11/13/2015.
 */

angular.module('Signup', [])

    .directive('isDate', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.isDate = function(modelValue) {
                    if (!modelValue) {
                        return true;
                    }
                    var result = !isNaN(Date.parse(modelValue));
                    return !isNaN(Date.parse(modelValue));
                }
            }
        };
    })

    .directive('inThePast', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.inThePast = function(modelValue) {
                    if (!modelValue || isNaN(Date.parse(modelValue))) {
                        return true;
                    }
                    var input = new Date(modelValue);
                    var age = Date.now() - input.getTime();
                    var ageDate = new Date(age);
                    var result = ageDate.getUTCFullYear() - 1970;
                    return (result) >= 13;
                }
            }
        };
    })

    .directive('match', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.match = function(modelValue) {
                    if (!modelValue) {
                        return true;
                    }
                    return modelValue === scope.password;
                }
            }
        };
    })


    .controller('SignupController', function($scope) {

        $scope.submitForm = function() {
            if ($scope.signupForm.$valid) {
                $scope.signedUp = true;

                // clear all fields
                $scope.email = null;
                $scope.firstName = null;
                $scope.lastName = null;
                $scope.birthdate = null;
                $scope.password = null;
                $scope.passwordConfirm = null;
            }
        };

    });