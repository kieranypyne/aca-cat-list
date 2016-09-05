const Backbone = require('backbone');
const CatModel = require('../models/CatModel');

const CatsCollection = Backbone.Collection.extend({
  url: '/cats',
  model: CatModel
});

module.exports = CatsCollection;
