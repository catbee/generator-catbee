<% if (isCss) { %>let css = require('./<%= name %>.css');
let { extend } = require('catbee-utils');<% } %>

class <%= className %> {
  <% if (isCss) { %>@extend({ css })<% } %>
  render () {
    return this.$context.getWatcherData();
  }
}

module.exports = <%= className %>;
