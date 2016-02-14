
var app = angular.module('resultsApp', []);

app.controller('ResultsController', [
'$scope',
function($scope){
  $scope.test = 'TODO';
  $scope.items = [
    {title: 'post 1', artist:'artist',album:'album', duration: 873},
    {title: 'post 2', artist:'artist',album:'album', duration: 873},
    {title: 'post 3', artist:'artist',album:'album', duration: 873},
    {title: 'post 4', artist:'artist',album:'album', duration: 873},
    {title: 'post 5', artist:'artist',album:'album', duration: 873},
    {title: 'post 6', artist:'artist',album:'album', duration: 873},
  ];
}]);
