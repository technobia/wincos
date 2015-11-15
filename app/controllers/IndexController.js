/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';

    function IndexController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
    }

    IndexController.prototype.onLoad = function() {
        console.log('Mother Fucker! Welcome to the first');
    };

    return IndexController;
});