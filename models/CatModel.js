const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },

    bio: {
      type: String,
      required: true
    },

    hobbies: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model('Cat', catSchema);
