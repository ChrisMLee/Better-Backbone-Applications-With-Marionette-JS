var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');


(function(global) {

  // Eventually will have a nested collection
  var DayModel = Backbone.Model.extend({
    defaults: {
      task: "task",
      completed: false
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayModel;
  } else {
   global.BookList = DayModel;
  }
})(this);

