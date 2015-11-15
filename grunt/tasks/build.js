/**
 * Created by kevin on 2/9/15.
 */
module.exports = function(grunt) {
    var compileTasks = [
        'less:compile',
        'requirejs:compile'
    ];
    grunt.registerTask('build', compileTasks);
};
