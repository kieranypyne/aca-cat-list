const _ = require('lodash');
const Backbone = require('backbone');

const CatProfileView = Backbone.View.extend({
  el: '<div class="profile"></div>',

  template: _.template(`
    <img src="<%= cat.get('image') %>" alt="Profile Pic" />
    <div>
      <label>Name:</label>
      <span> <%= cat.get('name') %> </span>
    </div>
    <div>
      <label>Hobbies:</label>
      <span> <%= cat.get('hobbies') %> </span>
    </div>
    <div>
      <label>Bio:</label>
      <p> <%= cat.get('bio') %> </p>
    </div>
  `),

  render() {
    this.$el.html(this.template({ cat: this.model }));
    return this;
  }
});

module.exports = CatProfileView;
