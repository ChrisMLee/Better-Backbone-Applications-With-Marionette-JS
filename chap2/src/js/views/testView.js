var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

// module.exports = Backbone.View.extend({
//   tagName: 'li',
//   render: function(){
//     this.$el.empty();
//     this.$el.html('<p>The Future</p>');
//     console.log("THE BACKBONE JQUERY", Backbone.$('h1').html());
//     return this;
//   }
// });

module.exports =  Marionette.View.extend({
    tagName: 'li',
    render: function(){
      this.$el.empty();
      this.$el.html('<p>The Future</p>');
      return this;
    }
});
