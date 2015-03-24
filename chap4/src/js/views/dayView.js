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
    tagName: 'ul',
    template: dayTemplate,
    doneTemplate: doneTemplate,
    templateHelpers: {
      // this is awesome
        description: function () {
            return "i'm doing " + this.task;
        },
        longDescription: function () {
            return "I need to " + this.task + ". It is done? " + this.completed;
        },
        finishedDescription: function(){
            return "I did this task: " + this.task + ". Done? " + this.completed;
        }
    },
    getTemplate: function(){
      // this is awesome
        if (this.model.get('completed') === true){
            return this.doneTemplate;
        } else {
            return this.template;
        }
    },
    onShow: function(){
      alert("i'm getting shown");
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayView;
  } else {
   global.DayView = DayView;
  }
})(this);
