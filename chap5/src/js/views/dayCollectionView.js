var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var DayView = require('./dayView');
var EmptyView = require('./emptyView');
// var doneTemplate = require('../templates/doneTemplate.hbs');


(function(global) {

  var DayCollectionView = Marionette.CollectionView.extend({
    childView: DayView,
    emptyView: EmptyView,
    onRender: function(){
      console.log("I was rendered");
    },
    childViewOptions: function(model, index) {
      // do some calculations based on the model
      model.set('childIndex', index);
    }
  });


  if (typeof module !== undefined) {
    module.exports = DayCollectionView;
  } else {
   global.DayView = DayCollectionView;
  }
})(this);
