const $ = require('jquery');
const CatsListView = require('./views/CatsListView');
const CatsCollection = require('./collections/CatsCollection');

// Set jQuery in the window
window.$ = window.jQuery = $;

const app = document.querySelector('#app');
const cats = new CatsCollection();
const listView = new CatsListView({ collection: cats });

cats.fetch();

app.appendChild(listView.render().el);
