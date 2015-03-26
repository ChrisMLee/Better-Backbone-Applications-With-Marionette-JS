var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');
var Radio = require('backbone.radio');

var userChannel = Radio.channel('user');

var dayTemplate = require('../templates/dayTemplate.hbs');
var TaskView = require('./taskView');

(function(global) {

  var DayView = Backbone.Marionette.CompositeView.extend({
    tagName: 'li',
    template: dayTemplate,
    childViewContainer: 'ul',
    childView: TaskView,
    initialize: function() {
      this.listenTo(this, 'cool:beans', function(){
          console.log('cool:beans triggered');
      });

      userChannel.comply('some:action', function() {
        console.log('I was told to execute some action');
      });

      this.collection = this.model.get('tasks');
    },
    onCoolBeans: function() {
        console.log('CoolBeans called');
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayView;
  } else {
   global.DayView = DayView;
  }
})(this);
