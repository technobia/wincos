define(function(require) {
    'use strict';

    function FooterController($scope, $rootScope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};
        this.$rootScope = $rootScope;

        this.event.onLoad = this.onLoad.bind(this);
        this.event.updateSelected = this.updateSelected.bind(this);
    }

    FooterController.prototype.onLoad = function() {};

    FooterController.prototype.publishUpdateSelected = function(number) {
        this.$rootScope.$broadcast('updateSelected', number);
    };

    FooterController.prototype.updateSelected = function(number) {
        this.publishUpdateSelected(number);
    };

    return FooterController;
});