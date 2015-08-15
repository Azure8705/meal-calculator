(function() {
  'use strict';

  angular
    .module('mealCalc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
