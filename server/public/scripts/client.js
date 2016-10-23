

// var myApp = angular.module('myModule', [])
//   .directive('myDirective', function($timeout) {
//     return {
//         restrict: 'A',
//         link: function(scope, element) {
//             scope.height = element.prop('offsetHeight');
//             scope.width = element.prop('offsetWidth');
//         }
//     };
//   })
// ;




var myApp = angular.module("myApp", ["ngRoute"]);




myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/cats", {
        templateUrl: "/views/partials/cats.html",
        controller: "catController"
      }).
      when("/dogs", {
        templateUrl: "/views/partials/dogs.html",
        controller: "dogController"
      }).
      when("/lizards", {
        templateUrl: "/views/partials/lizards.html",
        controller: "lizardController"
      }).
      otherwise({
        redirectTo: "/cats"
      });
}]);

myApp.controller("catController", ["$scope","$document", function($scope, $document){
console.log('works?');
makeGrid($document, $scope, "gridContainer", 13, 1);
$scope.amount = 14
$scope.outline = 1;
$scope.newGrid = function(amount, out){
  makeGrid($document, $scope, 'gridContainer', amount, out);
}


}]);

myApp.controller("dogController", ["$scope","$document", function($scope, $document){
    console.log("Dogs are neat");
}]);

myApp.controller("lizardController", ["$scope","$document", function($scope,$document){
    console.log("Lizards are toxic");
}]);

//8,32,64 bit.
function makeGrid($document, $scope, containerID, bitSize, outlined){

  var gridContainer = $document[0].getElementById(containerID);
  var gridHeight = gridContainer.offsetHeight;
  var gridWidth = gridContainer.offsetWidth;

  var size = gridHeight / bitSize;
  var pixelArray = [];
  var pixelAmount = bitSize * bitSize;

  var row = 0;
  var column = 0;
  var randomColor = 0;
  var colorString = "";
  var outlineWidth = 0;
  function Pixel(color, yPos, xPos, size, id, outlineWidth){
    this.color = color;
    this.yPos = yPos;
    this.xPos = xPos;
    this.height = size - (outlineWidth * 2) + "px";
    this.width = size - (outlineWidth * 2) + "px";
    this.id = id;
    this.outline = outlineWidth + 'px solid white'
  }

  for(var i = 0; i < pixelAmount; i++){
    randomColor = getRandomInt(0,999999);
    column++;
    if (column == bitSize + 1){
      column = 1;
    }
    if (i % bitSize === 0){
      row++;
    }

    // pixel.id = pixel.xPos + "," + pixel.yPos;
    // pixel.color = "#" + randomColor;
    colorString = getColorString(randomColor);
    outlineWidth = outlined
    var id = "x" + column + "y" + row;
    // console.log(pixel);
    var newPixel = new Pixel(colorString, row, column, size, id, outlineWidth);
    pixelArray.push(newPixel);
  }
  console.log(pixelArray);
  $scope.pixels = pixelArray;


  console.log("Grid size: ", gridWidth, "px by ", gridHeight, "px.");
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getColorString(num){
  num = num + "";
  var amountOfZero = num.length - 6;
  var zeros = "";

  if (amountOfZero > 0){
    for (var i = 0; i < amountOfZero; i++){
      zeros = zeros + "0";
    }
  }

  return zeros + num;
}
