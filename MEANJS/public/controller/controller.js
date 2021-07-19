function AppCtrl($scope, $http) {
    console.log('hello world from Controller')

    $http.get('/contactlist').success(function(response){
        $scope.contactlist = response
    })
}