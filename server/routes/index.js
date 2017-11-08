const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/userPos',
  testController.userPos
);

router.get('/posts',testController.getPosts);

module.exports = router;