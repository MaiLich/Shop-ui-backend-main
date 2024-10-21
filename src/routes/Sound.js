const express = require('express');
const router = express.Router();
const SoundController = require('../controllers/SoundController');

router.get('/:slug', SoundController.item);
router.get('/', SoundController.index);

module.exports = router;
