var myApp =  angular.module("myApp",["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/storm",{
      templateUrl: "/views/partials/stormInfo.html",
      controller: "stormController"
    }).
    when("/magneto",{
      templateUrl: "/views/partials/magnetoInfo.html",
      controller: "magnetoController"
    }).
    when("/pyro",{
      templateUrl: "/views/partials/pyroInfo.html",
      controller: "pyroController"
    }).
    otherwise({
      redirectTo: "/storm"
    });
}]);

myApp.controller("stormController", ["$scope","$location", function($scope,$location){
  $scope.imgSrc = "/imgs/storm.jpeg";
  $scope.go = function ( path ) {
  $location.path( path );
};
  console.log("thunder n stuff");
}]);
myApp.controller("magnetoController", ["$scope", function($scope){
  $scope.imgSrc = "/imgs/magneto.jpeg";
  console.log("magnetz");
}]);
myApp.controller("pyroController", ["$scope", function($scope){
  $scope.imgSrc = "/imgs/pyro.jpeg";
  console.log("pyro is here");
}]);
