var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

// Dependencies

(function(global) {

  // Eventually will have a nested collection
  var Node = Backbone.Model.extend({
    initialize: function(){
      var nodes = this.get("nodes");
      // Covert nodes to a NodeCollection
      this.set("nodes", new NodeCollection(nodes));
    },
    toJSON: function() {
      // Call parent's toJSON method
      var data = Backbone.Model.prototype.toJSON.call(this);
      if (data.nodes && data.nodes.toJSON) {
          // If nodes is a collection, convert it to JSON
          data.nodes = data.nodes.toJSON();
      }
      return data;
    }
  });

  var NodeCollection = Backbone.Collection.extend({
    model: Node
  });


  if (typeof module !== undefined) {
    module.exports = Node;
  } else {
   global.Node = Node;
  }
})(this);

