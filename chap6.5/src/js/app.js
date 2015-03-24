var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');


var DayModel = require('./models/day');
var DayCollection = require('./collections/dayCollection');
var DayCollectionView = require('./views/dayCollectionView');

// var DayView = require('./views/dayView');
// var DayModel = require('./models/day');
// var DayCollection = require('./collections/dayCollection');


//var NodeCollection = require('./collections/nodeCollection');



$(function() {
  console.log( "the selector", $('h1').html());
  console.log(_.VERSION);
  // _.each([7,8], alert);

// nodeData = [
//   {
//     nodeName: "top level 1",
//     nodes: [
//       {
//         nodeName: "2nd level, item 1",
//         nodes: [
//           { nodeName: "3rd level, item 1" },
//           { nodeName: "3rd level, item 2" },
//           { nodeName: "3rd level, item 3" }
//         ]
//       },
//       {
//         nodeName: "2nd level, item 2",
//         nodes: [
//           { nodeName: "3rd level, item 4" },
//           {
//               nodeName: "3rd level, item 5",
//               nodes: [
//                   { nodeName: "4th level, item 1" },
//                   { nodeName: "4th level, item 2" },
//                   { nodeName: "4th level, item 3" }
//               ]
//           },
//           { nodeName: "3rd level, item 6" }
//         ]
//       }
//     ]
//   },
//   {
//     nodeName: "top level 2",
//     nodes: [
//       {
//         nodeName: "2nd level, item 3",
//         nodes: [
//           { nodeName: "3rd level, item 7" },
//           { nodeName: "3rd level, item 8" },
//           { nodeName: "3rd level, item 9" }
//         ]
//       },
//       {
//         nodeName: "2nd level, item 4",
//         nodes: [
//           { nodeName: "3rd level, item 10" },
//           { nodeName: "3rd level, item 11" },
//           { nodeName: "3rd level, item 12" }
//         ]
//       }
//     ]
//   }

// ];

var dayData = [
  { name: "Monday", tasks: [
    {taskName: "mediated", completed: false },
    {taskName: "run", completed: true }
    ]
  },
  { name: "Tuesday", tasks: [
    {taskName: "walk dog", completed: false },
    {taskName: "smell the flowers", completed: true }
    ]
  }
];

  var dayCollection = new DayCollection(dayData);
  console.log("The Day Collection", dayCollection.at(1));
  // var Node = Backbone.Model.extend({
  //   initialize: function(){
  //       var nodes = this.get("nodes");
  //       if (nodes){
  //           this.nodes = new NodeCollection(nodes);
  //           this.unset("nodes");
  //       }
  //   }
  // });

  // var NodeCollection = Backbone.Collection.extend({
  //   model: Node
  // });

  // var TreeView = Backbone.Marionette.CompositeView.extend({
  //   template: nodeTemplate,
  //   tagName: "li",
  //   childViewContainer: "ul",
  //   initialize: function(){
  //     this.collection = this.model.nodes;
  //   },
  //   getTemplate: function() {
  //       if (_.isUndefined(this.collection)) {
  //          return leafTemplate;
  //       } else {
  //           return nodeTemplate;
  //       }
  //   }
  // });

  // var TreeRoot = Marionette.CollectionView.extend({
  //   tagName: "ul",
  //   childView: TreeView
  // });

  // var nodes = new NodeCollection(nodeData);

  // console.log("the nodes", nodes);

  // var tree = new TreeRoot({collection: nodes});
  // tree.render();
  // $('body').append(tree.el);

  var dayCollectionView = new DayCollectionView({collection: dayCollection});
  var region = new Marionette.Region({
    el: "#container"
  });

  region.show(dayCollectionView);

  // console.log(testerView.render().el);
});
