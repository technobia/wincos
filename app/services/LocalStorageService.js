/**
 * Created by THANH BINH on 10/24/2015.
 */
define(function() {
    function LocalStorageService() {

    }

    LocalStorageService.prototype.set = function(key, data) {
        try {
            window.localStorage[key] = JSON.stringify(data);
        } catch (e) {
            window.localStorage[key] = data;
            throw new Error();
        }
    };

    LocalStorageService.prototype.get = function(key) {
        var json = window.localStorage[key];

        try {
            return JSON.parse(json);
        } catch (e) {
            throw new Error();
        }
    };

    LocalStorageService.prototype.delete = function(key) {
        window.localStorage.removeItem(key);
    };

    LocalStorageService.newInstance = function() {
        return new LocalStorageService;
    };

    return LocalStorageService;
});