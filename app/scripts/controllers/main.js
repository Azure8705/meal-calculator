'use strict';

/**
 * @ngdoc function
 * @name mealCalcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mealCalcApp
 */
angular.module('mealCalcApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('assets/menu.json').success(function (data) {
          $scope.menu = data;
      });

      $scope.myOrder = [];

      $scope.myTotal = {
          total: 0,
          tax: 9,
          tip: 15,
          grandTotal: 0
       };

      $scope.grandTotalCalc = function() {
          $scope.gtcTax = $scope.myTotal.total * ($scope.myTotal.tax / 100);
          console.log($scope.gtcTax);
          $scope.gtcTip = $scope.myTotal.total * ($scope.myTotal.tip / 100);
          console.log($scope.gtcTip);
          $scope.myTotal.grandTotal = $scope.myTotal.total + $scope.gtcTax + $scope.gtcTip;
      };

      $scope.addToOrder = function (newItem) {
          $scope.myOrder.push(newItem);
          $scope.myTotal.total += newItem.price;
          $scope.grandTotalCalc();
      };
      $scope.removeFromOrder = function (item) {
          var index = $scope.myOrder.indexOf(item);
          $scope.myOrder.splice(index, 1);
          $scope.myTotal.total -= item.price;
          $scope.grandTotalCalc();
      };

      
      
  });