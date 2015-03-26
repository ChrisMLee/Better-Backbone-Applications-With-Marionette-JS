var MyApp = Marionette.Application.extend({
      // add your own properties and methods here
});

var App = new MyApp();

var SomeModule = function(o){
      // Constructor for SomeModule
};

App.addInitializer(function(options) {
  App.someModule = new SomeModule(options);
});

App.on('initialize:before', function(options) {
  options.anotherThing = true; // Add more data to your options
});

App.on('initialize:after', function(options) {
  console.log('Initialization Finished');
});

App.on('start', function(options) {
  Backbone.history.start(); // Great time to do this
});

var MyView = Backbone.View.extend({
  render: function(){
    this.$el.empty();
    this.$el.html( '<p>HELLO</p>' );
    return this;
  }
});


var MyOtherView = Backbone.View.extend({
  render: function(){
    this.$el.empty();
    this.$el.html( '<p>to the WORLD</p>' );
    return this;
  }
});

App.addRegions({
    container: "#container",
    footer:    "#footer"
});

App.container.show(new MyView());

setTimeout(function(){
  App.container.show(new MyOtherView());
}, 1000);

setTimeout(function(){
   App.container.empty();
}, 3000);

// var region = new Marionette.Region({
//     el: "#container"
// });

// region.show(new MyView());

// setTimeout(function(){
//   region.show(new MyOtherView());
// }, 1000);

// setTimeout(function(){
//   region.empty();
// }, 3000);
