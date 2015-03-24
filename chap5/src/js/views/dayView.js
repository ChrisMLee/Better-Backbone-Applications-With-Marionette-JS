var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');

var dayTemplate = require('../templates/dayTemplate.hbs');
var doneTemplate = require('../templates/doneTemplate.hbs');

// Handlebars.registerHelper('description', function (task) {
//   return "i'm doing " + task;
// });


(function(global) {

  var DayView = Marionette.ItemView.extend({
    tagName: 'div',
    template: dayTemplate,
    doneTemplate: doneTemplate,
    modelEvents: {'change': 'render'},
    getTemplate: function(){
      // this is awesome
        if (this.model.get('completed') === true){
            return this.doneTemplate;
        } else {
            return this.template;
        }
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayView;
  } else {
   global.DayView = DayView;
  }
})(this);
