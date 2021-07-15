var app = angular
                .module('app', [])
                .controller('emp', function($scope){
                   $scope.msg = "This is AngularJS From $scope"
                });
app.directive('myInfoMsg', function(){
   return {
        // template:"<b>This is AngularJS</b>"
        // template:"<b>{{msg}}</b>"
        templateUrl:"my-info-msg.html"
   }
})
