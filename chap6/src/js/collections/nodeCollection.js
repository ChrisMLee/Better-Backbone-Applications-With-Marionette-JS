var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Dependencies
var NodeModel = require('../models/node');



(function(global) {

  var NodeCollection = Backbone.Collection.extend({
    model: NodeModel
  });

  if (typeof module !== undefined) {
    module.exports = NodeCollection;
  } else {
    global.NodeCollection = NodeCollection;
  }
})(this);
