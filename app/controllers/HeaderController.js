define(function(require) {
    'use strict';

    function HeaderController($scope, $route) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};
        this.$route = $route;

        this.event.onLoad = this.onLoad.bind(this);
        this.event.updateSelected = this.updateSelected.bind(this);
    }

    HeaderController.prototype.onLoad = function() {
        var value = this.$route.current.templateUrl;
        switch (value) {
            case 'templates/why-wincos.html':
                this.data.selected = 1;
                break;

            case 'templates/home.html':
                this.data.selected = 0;
                break;

            default:
                this.data.selected = 0;
                break;
        }
    };

    HeaderController.prototype.updateSelected = function(number) {
        this.data.selected = number;
    };

    return HeaderController;
});