module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint:{

        },

        concat: {
            options:{
                separator: ";"
            },
            dist:{
                src:[ "dev/js/*.js","!dev/js/app.js"],
                dest:"dev/js/app.js"
            }
        },

        uglify:{
            dist:{
                files: {
                    "prod/js/app.js": ["dev/js/app.js"]
                }
            }
        }
    });



    /**
     * Set up tasks
     * @type {string[]}
     */
    var taskList = [
        "grunt-contrib-concat",
        "grunt-contrib-uglify"
    ];

    for(var task in taskList){
        grunt.loadNpmTasks(taskList[task]);
    }

    grunt.registerTask("dist", ["concat:dist", "uglify:dist"]);
};