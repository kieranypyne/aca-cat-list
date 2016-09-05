const _ = require('lodash');
const Backbone = require('backbone');

const CatItemView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template(`
    <img src="<%= cat.get('image') %>" alt="Profile Pic" />
    <div>
      <span> <%= cat.get('name') %> </span>
    </div>
  `),

  render() {
    this.$el.html(this.template({ cat: this.model }));
    return this;
  }
});

module.exports = CatItemView;
