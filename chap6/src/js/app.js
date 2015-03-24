var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var nodeTemplate = require('./templates/nodeTemplate.hbs');
var leafTemplate = require('./templates/leafTemplate.hbs');


// var DayView = require('./views/dayView');
// var DayModel = require('./models/day');
// var DayCollection = require('./collections/dayCollection');
// var DayCollectionView = require('./views/dayCollectionView');

//var NodeCollection = require('./collections/nodeCollection');



$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);
  // _.each([7,8], alert);

nodeData = [
  {
    nodeName: "top level 1",
    nodes: [
      {
        nodeName: "2nd level, item 1",
        nodes: [
          { nodeName: "3rd level, item 1" },
          { nodeName: "3rd level, item 2" },
          { nodeName: "3rd level, item 3" }
        ]
      },
      {
        nodeName: "2nd level, item 2",
        nodes: [
          { nodeName: "3rd level, item 4" },
          {
              nodeName: "3rd level, item 5",
              nodes: [
                  { nodeName: "4th level, item 1" },
                  { nodeName: "4th level, item 2" },
                  { nodeName: "4th level, item 3" }
              ]
          },
          { nodeName: "3rd level, item 6" }
        ]
      }
    ]
  },
  {
    nodeName: "top level 2",
    nodes: [
      {
        nodeName: "2nd level, item 3",
        nodes: [
          { nodeName: "3rd level, item 7" },
          { nodeName: "3rd level, item 8" },
          { nodeName: "3rd level, item 9" }
        ]
      },
      {
        nodeName: "2nd level, item 4",
        nodes: [
          { nodeName: "3rd level, item 10" },
          { nodeName: "3rd level, item 11" },
          { nodeName: "3rd level, item 12" }
        ]
      }
    ]
  }

];

// var nodeData = [
//     {
//         nodeName: "1",
//         nodes: [
//             {
//                 nodeName: "1.1",
//                 nodes: [
//                     { nodeName: "1.1.1" },
//                     { nodeName: "1.1.2" },
//                     { nodeName: "1.1.3" }
// ] },
//             {
//                 nodeName: "1.2",
//                 nodes: [
//                     { nodeName: "1.2.1" },
//                     {
//                         nodeName: "1.2.2",
//                         nodes: [
//                             { nodeName: "1.2.2.1" },
//                             { nodeName: "1.2.2.2" },
//                             { nodeName: "1.2.2.3" }
// ] },
//                     { nodeName: "1.2.3" }
//                 ]
// } ]
// }, {

// nodeName: "2",
// nodes: [
//     {
//         nodeName: "2.1",
//         nodes: [
//             { nodeName: "2.1.1" },
//             { nodeName: "2.1.2" },
//             { nodeName: "2.1.3" }
// ] },
// {

// nodeName: "2.2",
//                   nodes: [
//                       { nodeName: "2.2.1" },
//                       { nodeName: "2.2.2" },
//                       { nodeName: "2.2.3" }
// ] }
// ] }
//   ];

  // var NodeCollection = Backbone.Collection.extend({
  //   model: Node
  // });

  // var Node = Backbone.Model.extend({
  //   initialize: function(){
  //     var nodes = this.get("nodes");
  //     // Covert nodes to a NodeCollection
  //     this.set("nodes", new NodeCollection(nodes));
  //   },
  //   toJSON: function() {
  //     // Call parent's toJSON method
  //     var data = Backbone.Model.prototype.toJSON.call(this);
  //     if (data.nodes && data.nodes.toJSON) {
  //         // If nodes is a collection, convert it to JSON
  //         data.nodes = data.nodes.toJSON();
  //     }
  //     return data;
  //   }
  // });

  var Node = Backbone.Model.extend({
    initialize: function(){
        var nodes = this.get("nodes");
        if (nodes){
            this.nodes = new NodeCollection(nodes);
            this.unset("nodes");
        }
    }
  });

  var NodeCollection = Backbone.Collection.extend({
    model: Node
  });

  var TreeView = Backbone.Marionette.CompositeView.extend({
    template: nodeTemplate,
    tagName: "li",
    childViewContainer: "ul",
    initialize: function(){
      this.collection = this.model.nodes;
    },
    getTemplate: function() {
        if (_.isUndefined(this.collection)) {
           return leafTemplate;
        } else {
            return nodeTemplate;
        }
    }
  });

  var TreeRoot = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: TreeView
  });

  var nodes = new NodeCollection(nodeData);

  console.log("the nodes", nodes);

  var tree = new TreeRoot({collection: nodes});
  tree.render();
  $('body').append(tree.el);



  // var testCollection = new DayCollection([{task: "clean house", completed: false}, {task: "walk dog", completed: false},{task: "hang with friends", completed: true}]);

  // var testerView = new DayCollectionView({ collection: testCollection});

  // var region = new Marionette.Region({
  //   el: "#container"
  // });

  // region.show(tree);

  // console.log(testerView.render().el);
});
