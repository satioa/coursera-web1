(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkLunchItems = function () {
    var num = countListItems($scope.lstItems);
    $scope.message = displayMsg(num);
  };

  function countListItems(lstItems) {
    var count = 0;
    if (lstItems) {
      var array = lstItems.split(',');
      for (var item in array) {
        if (array[item].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function displayMsg(num) {
    if (num === 0) {
      colorRed();
      return 'Please enter data first';
    }
    else if (num <= 3) {
      colorGreen();
      return 'Enjoy!';
    } else {
      colorGreen();
      return 'Too much!';
    }
  }
  function colorGreen(){
    document.getElementById("lunch-menu").style.borderColor = "green";
    document.getElementById("lunch-menu").style.color = "green";
    document.getElementById("colorChange").style.color = "green";
  }
  function colorRed(){
    document.getElementById("lunch-menu").style.borderColor = "red";
    document.getElementById("lunch-menu").style.color = "red";
    document.getElementById("colorChange").style.color = "red";
  }
}

})();
