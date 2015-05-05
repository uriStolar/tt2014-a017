module.exports = function (grunt) {
// Load grunt tasks automatically
require('load-grunt-tasks')(grunt);

// Define the configuration for all the tasks
grunt.initConfig({
    // Project settings
    config: {
        // Configurable paths
        app: ''
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '{,*/}*.html',
                '.tmp/styles/{,*/}*.css'
            ]
        }
    },
    // The actual grunt server settings
    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: true,
                base: [
                    '.tmp',
                    ''
                ]
            }
        },
    },
});
grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'connect:livereload',
        'watch'
        ]);
    });
};
