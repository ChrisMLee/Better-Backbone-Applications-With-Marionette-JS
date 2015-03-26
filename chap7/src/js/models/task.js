var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');


(function(global) {

  // Eventually will have a nested collection
  var TaskModel = Backbone.Model.extend({
    defaults: {
      taskName: null,
      completed: false
    }
  });

  if (typeof module !== undefined) {
    module.exports = TaskModel;
  } else {
   global.TaskModel = TaskModel;
  }
})(this);

