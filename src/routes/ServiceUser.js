const express = require('express');
const router = express.Router();
const ServiceUserController = require('../controllers/ServiceUserController');

router.get('/', ServiceUserController.index);

module.exports = router;
