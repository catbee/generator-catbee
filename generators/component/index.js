var generator = require('yeoman-generator');
var path = require('path');
var _ = require('lodash');

module.exports = generator.NamedBase.extend({
  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  prompting: {
    setCss: function () {
      var done = this.async();

      this.prompt({
        type : 'confirm',
        name : 'isCss',
        message : 'Do you need css styles?'
      }, function (status) {
        this._isCss = status.isCss;
        done();
      }.bind(this));
    },

    setPath: function () {
      var done = this.async();

      this.prompt({
        type : 'input',
        name : 'path',
        message : 'Set path to your component folder (optional)'
      }, function (status) {
        this.path = status.path;
        done();
      }.bind(this));
    }
  },

  writing: function () {
    var name = this.name;
    var isCss = this._isCss;
    var pathArg = this.path || '';
    var dest = path.join(pathArg, name);

    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(`components/${dest}/${name}.js`),
      { name, isCss, className: _.chain(name).camelCase().capitalize().value() }
    );

    this.fs.copyTpl(
      this.templatePath('component.json'),
      this.destinationPath(`components/${dest}/component.json`),
      { name }
    );

    this.fs.copyTpl(
      this.templatePath('component.html'),
      this.destinationPath(`components/${dest}/${name}.html`)
    );

    if (isCss) {
      this.fs.copyTpl(
        this.templatePath('component.css'),
        this.destinationPath(`components/${dest}/${name}.css`)
      );
    }
  }
});
