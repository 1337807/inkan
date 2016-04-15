module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              loose: "all"
            }]
          ]
        },
        files: {
          // if the source file has an extension of es6 then
          // we change the name of the source file accordingly.
          // The result file's extension is always .js
          "./public/dist/app.js": ["./public/javascripts/*.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./public/javascripts/*.js"],
        tasks: ["browserify", "reload"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify"]);
  grunt.registerTask("reload", "reload Chrome on OS X",
  function() {
    require("child_process").exec("osascript " +
    "-e 'tell application \"Google Chrome\" " +
    "to tell the active tab of its first window' " +
    "-e 'reload' " +
    "-e 'end tell'");
  });
};
