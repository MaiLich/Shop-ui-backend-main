const express = require('express');
const router = express.Router();
const DataUserController = require('../controllers/DataUserController');

router.put('/:id', DataUserController.itemPutUser);
router.post('/confirmDataUsers', DataUserController.itemGetLogin);
router.post('/', DataUserController.itemPost);
router.get('/', DataUserController.itemGetUser);

module.exports = router;
