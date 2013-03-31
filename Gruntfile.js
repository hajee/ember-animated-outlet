module.exports = function(grunt) {

    grunt.initConfig({
        meta: {
            name: 'Ember Animated Outlet'
        },
        concat: {
            dist: {
                separator: '\n\n',
                src: [
                    'src/js/animated-outlet.js',
                    'src/js/animated-outlet-helper.js',
                    'src/js/route.js',
                    'src/js/controller-mixin.js',
                    'src/js/effects/*.js'
                ],
                dest: 'dist/ember-animated-outlet.js'
            }
        },
        uglify: {
            dist: {
                src: ['dist/ember-animated-outlet.js'],
                dest: 'dist/ember-animated-outlet.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'dist',
                    environment: 'production'
                }
            }
        },
        watch: {
            files: [
                'src/**/*',
                'vendor/**/*'
            ],
            tasks: ['default']
        }
    });

//    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};