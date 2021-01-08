const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.get)  //find
router.post('/', userController.post); // create
router.put('/:id', userController.put); //edit
router.delete('/:id', userController.delete); //delete


module.exports = router;