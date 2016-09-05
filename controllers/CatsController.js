const CatModel = require('../models/CatModel');

module.exports = {
  list(req, res, next) {
    CatModel.find().exec()
      .then(cats => {
        return res.json(cats);
      })
      .catch(err => {
        return next(err);
      });
  },

  show(req, res, next) {
    CatModel.findOne({ _id: req.params.id }).exec()
      .then(cat => {
        return res.json(cat);
      })
      .catch(err => {
        return next(err);
      });
  },

  create(req, res, next) {
    const { name, bio, hobbies, image } = req.body;

    new CatModel({ name, bio, hobbies, image }).save()
      .then(cat => {
        return res.json(cat);
      })
      .catch(err => {
        return next(err);
      });
  }
}
