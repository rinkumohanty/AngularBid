(function() {
  'use strict';

  angular
    .module('angulargen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
