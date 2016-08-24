'use-strict';
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            js: {
                files:[{
                    src:'js/jquery-2.2.3.js',
                    dest: 'js/jquery-2.2.3.min.js'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTasks('default',[uglify]);
};