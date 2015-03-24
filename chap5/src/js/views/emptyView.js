var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var emptyTemplate = require('../templates/emptyTemplate.hbs');

// Handlebars.registerHelper('description', function (task) {
//   return "i'm doing " + task;
// });


(function(global) {

  var EmptyView = Marionette.ItemView.extend({
    tagName: 'div',
    template: emptyTemplate,
  });

  if (typeof module !== undefined) {
    module.exports = EmptyView;
  } else {
   global.EmptyView = EmptyView;
  }
})(this);
