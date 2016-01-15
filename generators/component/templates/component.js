<% if (isCss) { %>var css = require('./<%= filesName %>.css');
var { extend } = require('catbee-utils');<% } %>

class <%= className %> {
  <% if (isCss) { %>@extend({ css })<% } %>
  render () {
    return this.$context.getWatcherData();
  }
}

module.exports = <%= className %>;
