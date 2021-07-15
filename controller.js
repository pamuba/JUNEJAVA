var myApp = angular
                .module('myModule', [])
                .controller('myController', function($scope){
                    var employee = {
                        firstName:"John",
                        lastName:"Smith",
                        gender:"Male",
                        logo:'bore.jpg'
                    };
                    $scope.employee = employee;
                    $scope.msg = "Hello"
                });