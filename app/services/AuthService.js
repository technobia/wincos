/**
 * Created by THANH BINH on 10/24/2015.
 */
define(function(require) {
    var LocalStorageService = require('services/LocalStorageService');

    function AuthService($http) {
        var localStorageService = LocalStorageService.newInstance();
        var authService = {};

        authService.getUsers = function() {
            return $http.get('json/users.json').then(function(res) {
                return res;
            });
        };

        authService.isAuthenticated = function() {
            try {
                localStorageService.get('Authentication')
            } catch (e) {
                return false;
            }
            var user = localStorageService.get('Authentication');

            return this.getUsers().then(function(res) {
                var users = res.data;
                return users[user.id];
            });
        };

        authService.isAuthorized = function(authorizedRoles) {
            //TODO
        };

        return authService;
    }

    return AuthService;
});