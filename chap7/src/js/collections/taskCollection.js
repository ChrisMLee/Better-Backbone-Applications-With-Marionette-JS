var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Dependencies
var TaskModel = require('../models/task');



(function(global) {

  var TaskCollection = Backbone.Collection.extend({
    model: TaskModel
  });

  if (typeof module !== undefined) {
    module.exports = TaskCollection;
  } else {
    global.TaskCollection = TaskCollection;
  }
})(this);
