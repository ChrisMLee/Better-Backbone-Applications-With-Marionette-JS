var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var TestView = require('./views/testView');

$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);
  // _.each([7,8], alert);

  var testerView = new TestView();

  var region = new Marionette.Region({
    el: "#container"
  });

  region.show(testerView);

  setTimeout(function(){

  }, 3000);


  console.log(testerView.render().el);
});
