var app = angular.module('app',['ngRoute'])

//Service - $routeProvider

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
                .when('/sumurl/:a/:b',{
                    templateUrl:"sumurl.html",
                    controller: 'sumurl'
                })
                .when('/suminput',{
                    templateUrl:"suminput.html",
                    controller: 'suminput'
                })
                .when('/',{
                    template:'<h4>Welcome to the App</h4>'
                })
                .otherwise('/',{
                    template:'<h4>Use The Links</h4>'
                })

}]);

app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
})
app.controller('suminput', function($scope, $interpolate, $location){
    $scope.a = 0
    $scope.b = 0

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        $location.path(url);
    }
})