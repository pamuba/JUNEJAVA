var app = angular.module('app',['ngRoute'])

//Service - $routeProvider

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:'<b>This is the first message</b>'
        templateUrl:'msg1.html',
        controller:'message1'
    })
    .when('/second-msg', {
        template:'<h2>This is the second message</h2>'
    })
    .when('/', {
        template:'<h2>This is the Home message</h2>'
    })
    .otherwise({
        template : '<h2>Wrong Path. Plz use the links</h2>',
        // redirectTo:"/first-msg"
        redirectTo: function(){
            alert("Doesn't Exist");
            return '/first-msg'
        }
    })

}]);

app.controller('message1', function($scope){
    $scope.a = 10;
    $scope.b = 20;
})