(function() {
    'use strict';

    angular
        .module('angulargen')
        .controller('AboutController', AboutController);

    //AboutController.$inject = ['productService'];

    /* @ngInject */
    function AboutController(productService) {
        var vm = this;
        vm.title = 'AboutController';

        activate();

        function activate() {
            //vm.msg = "Testing for route";
            //vm.products = productService.getProducts();
            vm.products = productService.getProducts();
        }
    }
})();
