const Backbone = require('backbone');
const CatsCollection = require('./collections/CatsCollection');
const CatsListView = require('./views/CatsListView');
const CatModel = require('./models/CatModel');
const CatProfileView = require('./views/CatProfileView');

let currentView;

const Router = Backbone.Router.extend({
  routes: {
    '/': 'cats',
    'cats/:id': 'cat',
    '*cats': 'cats'
  },

  cats() {
    const view = new CatsListView({ collection: new CatsCollection() });
    setView(view);
  },

  cat(id) {
    const cat = new CatModel({ _id: id });
    const view = new CatProfileView({ model: cat });
    setView(view);
  }

});

function setView(view) {
  if (currentView) {
    currentView.remove();
  }

  currentView = view;

  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.appendChild(view.render().el);
}

module.exports = Router;
