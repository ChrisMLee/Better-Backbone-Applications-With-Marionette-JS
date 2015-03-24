var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');

var taskTemplate = require('../templates/taskTemplate.hbs');
var completedTaskTemplate = require('../templates/completedTaskTemplate.hbs');

(function(global) {

  var TaskView = Backbone.Marionette.CompositeView.extend({
    tagName: 'li',
    taskTemplate: taskTemplate,
    completedTaskTemplate: completedTaskTemplate,
    modelEvents: {'change': 'render'},
    getTemplate: function(){
      // this is awesome
        if (this.model.get('completed') === true){
            this.$el.attr('class', 'completed');
            return this.taskTemplate;
        } else {
            return this.taskTemplate;
        }
    }
  });

  if (typeof module !== undefined) {
    module.exports = TaskView;
  } else {
   global.TaskView = TaskView;
  }
})(this);
