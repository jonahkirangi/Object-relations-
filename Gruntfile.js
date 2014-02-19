/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  jshint: {
    // define the files to lint
    files: ['lib/**/*.js', 'test/**/*.js'],
    // configure JSHint (documented at http://www.jshint.com/docs/)
    options: {
      // more options here if you want to override JSHint defaults
      "curly": true,
      "eqnull": true,
      "eqeqeq": true,
      "browser": true,
      "strict": true,

      globals: {
        jQuery: true,
        console: true,
        module: true
        }
      }
    },
  simplemocha: {
    options: {
      timeout: 3000,
      ignoreLeaks: false,
      reporter: 'tap'
      },
      all: {src: ['test/**/*.js']}
    },
  watch: {
    scripts: {
        files: ['lib/**/*.js', 'test/**/*.js'],
        tasks: ['simplemocha']
      },
    },
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['watch', 'jshint']);

};
