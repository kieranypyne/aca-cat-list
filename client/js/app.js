const $ = require('jquery');
const CatsListView = require('./views/CatsListView');
const CatsCollection = require('./collections/CatsCollection');

// Set jQuery in the window
window.$ = window.jQuery = $;

const app = document.querySelector('#app');
const listView = new CatsListView({ collection: new CatsCollection() });

app.appendChild(listView.render().el);
