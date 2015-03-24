var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var DayView = require('./views/dayView');
var DayModel = require('./models/day');
var DayCollection = require('./collections/dayCollection');
var DayCollectionView = require('./views/dayCollectionView');

$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);
  // _.each([7,8], alert);


  //var testerModel = new DayModel({task: "clean house", completed: false })
  var testCollection = new DayCollection([{task: "clean house", completed: false}, {task: "walk dog", completed: false},{task: "hang with friends", completed: true}]);
  //var testCollection = new DayCollection();
  var testerView = new DayCollectionView({ collection: testCollection});

  var region = new Marionette.Region({
    el: "#container"
  });

  region.show(testerView);

  setTimeout(function(){
    testCollection.at(0).set('completed', true);
  }, 500);

  setTimeout(function(){
     testCollection.add({task:"do new things", completed: false});
  }, 3000);

  setTimeout(function(){
     testCollection.remove(testCollection.at(2));
  }, 2000);

  setTimeout(function(){
     region.reset();
  }, 4000);

  setTimeout(function(){
    var testerView = new DayCollectionView({ collection: testCollection});
    region.show(testerView);
    console.log(testCollection.at(0));
  }, 5000);


  console.log(testerView.render().el);
});
