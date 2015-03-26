var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');

var DayView = require('./views/dayView');
var DayModel = require('./models/day');

var userChannel = Radio.channel('user');

var coolLayoutTemplate = require('./templates/coolLayout.hbs');

// SWEET: https://github.com/marionettejs/backbone.radio

$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);

  var MyApp = Marionette.Application.extend({
      // add your own properties and methods here
  });

  var App = new MyApp();

  var HeaderRegion = Marionette.Region.extend({
    el: '#header'
  });


  App.addRegions({
    header: HeaderRegion,
    body: '#content',
    footer: '#footer'
  });

  var CoolLayout = Marionette.LayoutView.extend({
    template: coolLayoutTemplate,
    regions: {
        main: '#coolness',
        secondary: '#notreally'
    }
  });

  var newDay = new DayModel({name: "Funday", tasks: [{taskName: "eat", completed: false }] });
  var newDayView = new DayView({model: newDay });

  var layout = new CoolLayout();

  App.header.show(layout);

  layout.main.show(newDayView);

  // setTimeout(function(){
  //   layout.main.reset();
  //   layout.removeRegion('main');
  // }, 1000);

  setTimeout(function(){
    newDayView.triggerMethod('cool:beans');

    userChannel.command('some:action');
  }, 1000);


  // var newDay2 = new DayModel({name: "Wednesday", tasks: [{taskName: "jump", completed: false }] });
  // var newDayView2 = new DayView({model: newDay2 })

  // var newDay3 = new DayModel({name: "Thursday", tasks: [{taskName: "run", completed: false }] });
  // var newDayView3 = new DayView({model: newDay3 })

  // App.header.show(newDayView);
  // setTimeout(function(){
  //  App.header.show(newDayView2);
  // }, 1000);
  // setTimeout(function(){
  //  App.header.show(newDayView3);
  // }, 2000);
  // setTimeout(function(){
  //  App.header.reset();
  // }, 3000);
  //App.body.show(newDayView2);
  //App.footer.show(newDayView3);

  // var region = new Marionette.Region({
  //   el: "#container"
  // });

  // region.show(dayCollectionView);


  // var MyRegion = Marionette.Region.extend({
  //     el: "#container", // Default element
  //     initialize: function(options) {
  //         // Special initialization stuff
  // } });

  // console.log(testerView.render().el);
});
