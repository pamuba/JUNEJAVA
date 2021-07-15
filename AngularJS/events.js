var myApp = angular
                .module('myModule', [])
                .controller('myController', function($scope){
                    var technologies = [
                        { name: "Java", likes:0, disliks:0 },
                        { name: "JS", likes:0, disliks:0},
                        { name: "React", likes:0, disliks:0},
                        { name: "Angular", likes:0, disliks:0 },
                        { name: "VueJS", likes:0, disliks:0}
                    ];
                    $scope.technologies = technologies;

                    $scope.incrementLikes = function(technology){
                        technology.likes++;
                    }
                    $scope.incrementDislikes = function(technology){
                        technology.disliks++;
                    }
                });