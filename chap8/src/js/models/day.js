var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var TaskCollection = require('../collections/taskCollection');

(function(global) {

  // Eventually will have a nested collection
  var DayModel = Backbone.Model.extend({
    defaults: {
      name: null
    },
    initialize: function(){
      var tasks = this.get("tasks");
      // Covert nodes to a NodeCollection
      this.set("tasks", new TaskCollection(tasks));
    }
  });

  if (typeof module !== undefined) {
    module.exports = DayModel;
  } else {
   global.BookList = DayModel;
  }
})(this);

