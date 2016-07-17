let css = require('./component.css');

class <%= className %> {
  constructor () {
    this.template = require('./template.hbs');
  }

  render () {
    return this.$context.getWatcherData()
      .then((data) => Object.assign({ css }, data));
  }
};

module.exports = {
  constructor: <%= className %>
};
