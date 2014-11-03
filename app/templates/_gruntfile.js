module.exports = function(grunt) {
  grunt.initConfig({
    //task config
   pkg: grunt.file.readJSON('package.json'),
   uglify: {
	options: {
         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
   },
   build:{
           src: 'src/<%= pkg.name %>.js',
           dest: 'build/<%= pkg.name %>.min.js'
   }
  }
  });
 
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  grunt.registerTask('default', ['build']);
  grunt.registerTask('default', ['uglify']);
};
