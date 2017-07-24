module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {presets: "es2015"}]
                    ]
                },
                files: {
                    "./dist/module.js": ["./app/js/*.js"]
                }
            }
        },
        eslint: {
            target: ["./app/js/*.js"]
        },
        watch: {
            scripts: {
                files: [".app//js/*.js"],
                tasks: ["eslint","browserify"]
            }
        },
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint")

    grunt.registerTask("default", ["browserify", "watch"]);
    grunt.registerTask("build", ["browserify"]);
    grunt.registerTask("lint", ["eslint"]);
};
