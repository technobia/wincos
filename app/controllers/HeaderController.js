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
            case 'templates/architectural-film.html':
                this.data.selected = 2;
                break;

            case 'templates/home.html':
                this.data.selected = 0;
                break;

            default:
                this.data.selected = 0;
                break;
        }
        this.initMinHeightMainSide();
    };

    HeaderController.prototype.updateSelected = function(number) {
        this.data.selected = number;
        this.initMinHeightMainSide();
    };

    HeaderController.prototype.initMinHeightMainSide = function() {
        var documentElement = $(window);
        var prev = documentElement.length;
        var inteval = setInterval(function() {
            if (prev === documentElement.length) {
                var height = documentElement.height() - 104 - 70;
                $('.main-side').css({'min-height': height});
                clearInterval(inteval);
            }
            prev = documentElement.length;
        }, 100);
    };

    return HeaderController;
});