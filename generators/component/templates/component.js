<% if (isCss) { %>var css = require('./<%= name %>.css');
var { extend } = require('catbee-utils');<% } %>

class <%= className %> {
  <% if (isCss) { %>@extend({ css })<% } %>
  render () {
    return this.$context.getWatcherData();
  }
}

module.exports = <%= className %>;
