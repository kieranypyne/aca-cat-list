const Backbone = require('backbone');

const CatModel = Backbone.Model.extend({
  urlRoot: '/cats',
  idAttribute: '_id'
});

module.exports = CatModel;
