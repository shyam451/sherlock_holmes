'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var custommeangen = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the delightful Test452 generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/modules');
      this.dest.mkdir('app/modules/dashboard');
      this.dest.mkdir('app/modules/email');
      this.dest.mkdir('app/modules/collection');
      this.dest.mkdir('app/modules/feedback');
      this.dest.mkdir('app/modules/login');
      this.dest.mkdir('app/modules/message');
      this.dest.mkdir('app/modules/birthday');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_gruntfile.js', 'gruntfile.js');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = custommeangen;
