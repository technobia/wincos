define(function(require) {
    'use strict';

    function BaseController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
    }

    BaseController.prototype.onLoad = function() {

    };

    return BaseController;
});