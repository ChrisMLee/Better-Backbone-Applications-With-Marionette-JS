var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

// Dependencies
var DayModel = require('../models/day');



(function(global) {

  var DayCollection = Backbone.Collection.extend({
    model: DayModel,
    initialize: function(){

    }
  });

  if (typeof module !== undefined) {
    module.exports = DayCollection;
  } else {
   global.DayView = DayCollection;
  }
})(this);
