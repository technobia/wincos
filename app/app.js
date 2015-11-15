/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';
    var config = require('config');

    var app = angular.module('sonias', [
        'ngRoute'
    ]);

    app.config(config);

    var IndexController = require('controllers/IndexController');
    app.controller('IndexController', IndexController);
});
