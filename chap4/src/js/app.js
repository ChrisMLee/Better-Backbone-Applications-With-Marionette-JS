var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var DayView = require('./views/dayView');
var DayModel = require('./models/day');

$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);
  // _.each([7,8], alert);


  var testerModel = new DayModel({task: "clean house", completed: false })
  var testerView = new DayView({model: testerModel});

  var region = new Marionette.Region({
    el: "#container"
  });

  region.show(testerView);

  console.log(testerView.render().el);
});
