const generator = require('yeoman-generator');
const path = require('path');
const _ = require('lodash');

module.exports = generator.NamedBase.extend({
  constructor: function constructor (...args) {
    generator.NamedBase.apply(this, args);
  },

  prompting: {
    setRoot () {
      const done = this.async();

      this.prompt({
        type: 'input',
        name: 'root',
        message: 'Set root path to your components folder (default: components)'
      }, (status) => {
        this.root = status.root || 'components';
        done();
      });
    },

    setPath () {
      var done = this.async();

      this.prompt({
        type: 'input',
        name: 'path',
        message: 'Set path to your component folder (optional)'
      }, (status) => {
        this.path = status.path || '';
        done();
      });
    }
  },

  writing () {
    const name = transformToPascalCase(this.name);
    const dest = path.join(this.path, name);
    const fullPath = `${this.root}/${dest}`;

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${fullPath}/index.js`),
      { className: name }
    );

    this.fs.copyTpl(
      this.templatePath('template.hbs'),
      this.destinationPath(`${fullPath}/template.hbs`)
    );

    this.fs.copyTpl(
      this.templatePath('component.css'),
      this.destinationPath(`${fullPath}/component.css`)
    );
  }
});

function transformToPascalCase (name) {
  return _.chain(name)
    .camelCase()
    .capitalize()
    .value();
}
