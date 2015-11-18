/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';

    function HomeController($scope, $rootScope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};
        this.$rootScope = $rootScope;

        this.event.onLoad = this.onLoad.bind(this);
        this.event.updateSelected = this.publishUpdateSelected.bind(this);
    }

    HomeController.prototype.onLoad = function() {

    };

    HomeController.prototype.publishUpdateSelected = function(number) {
        this.$rootScope.$broadcast('updateSelected', number);
    };

    return HomeController;
});