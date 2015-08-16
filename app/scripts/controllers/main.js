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

  });