
var myApp = angular.module('myModule', []);

//controller is a fn
var myController = function($scope){
    $scope.message = "Hello World"
}

myApp.controller('myController', myController)