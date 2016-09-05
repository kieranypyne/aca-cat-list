const Backbone = require('backbone');
const CatItemView = require('./CatItemView');

const CatsListView = Backbone.View.extend({
  el: '<ul class="cat-list"></ul>',

  initialize() {
    this.collection.fetch();
    this.listenTo(this.collection, 'update', this.render);
  },

  render() {
    this.$el.html('');

    this.collection.each(cat => {
      const view = new CatItemView({ model: cat });
      this.$el.append(view.render().el);
    });

    return this;
  }
});

module.exports = CatsListView;
