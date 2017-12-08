module.exports = function(grunt) {//The "wrapper" function
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name%>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  })
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify')
  //// Default task(s).
  grunt.registerTask('default', ['uglify'])

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });


  //refer to: https://gruntjs.com/getting-started#the-wrapper-function 
}