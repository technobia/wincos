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

    var HomeController = require('controllers/HomeController');
    app.controller('HomeController', HomeController);

    var HeaderController = require('controllers/HeaderController');
    app.controller('HeaderController', HeaderController);
});
