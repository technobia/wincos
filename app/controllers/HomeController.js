/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';

    function HomeController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
    }

    HomeController.prototype.onLoad = function() {
        console.log('Mother Fucker! Welcome to the first');
    };

    return HomeController;
});