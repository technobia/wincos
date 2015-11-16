define(function(require) {
    'use strict';

    function ArchitecturalController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
        this.event.updateSelected = this.updateSelected.bind(this);
    }

    ArchitecturalController.prototype.onLoad = function() {
        this.data.selected = null;
    };

    ArchitecturalController.prototype.updateSelected = function(number) {
        this.data.selected = number;
    };

    return ArchitecturalController;
});