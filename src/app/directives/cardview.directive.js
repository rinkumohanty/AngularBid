(function() {
    'use strict';

    angular
        .module('angulargen')
        .directive('cardViewDir', cardViewDir);

    //cardview.$inject = ['dependencies'];

    /* @ngInject */
    function cardViewDir() {
        // Usage:
        //
        // Creates:
        //
        var cardViewDir = {

            templateUrl: 'app/directives/cardview.html',
            restrict: 'E',
            scope: {
                data: '='
            }
        };
        return cardViewDir;

    }

})();
