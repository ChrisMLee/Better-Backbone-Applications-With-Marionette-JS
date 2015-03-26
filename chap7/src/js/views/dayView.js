var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var Handlebars = require('handlebars');

var dayTemplate = require('../templates/dayTemplate.hbs');
var TaskView = require('./taskView');

(function(global) {

  var DayView = Backbone.Marionette.CompositeView.extend({
    tagName: 'li',
    template: dayTemplate,
    childViewContainer: 'ul',
    childView: TaskView,
    initialize: function() {
      this.listenTo(this, 'some:event', function(){
          console.log('some:event triggered');
      });

        this.collection = this.model.get('tasks');
    },
    onSomeEvent: function() {
        console.log('onSomeEvent called');
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayView;
  } else {
   global.DayView = DayView;
  }
})(this);
