const express = require('express');
const router = express.Router();
const CatsController = require('../controllers/CatsController');

// Get a list of cats
router.get('/', CatsController.list);

// Get one cat
router.get('/:id', CatsController.show);

// Create a  new cat
router.post('/', CatsController.create);

module.exports = router;
