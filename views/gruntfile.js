module.exports = function(grunt) {
     grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "src/less/*.less",
            tasks: ["less"]
        },
         less: {
             production: {
                 options: {
                     paths: ["assets/css"],
                     cleancss: true
                 },
                 files: {"dist/css/main.css": "src/less/main.less"}
             }
         }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.registerTask('default', ['less']);
 };