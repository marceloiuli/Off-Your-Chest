const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//All routes start with '/' (root)
//POST /movies/:id/comments
router.post('/posts/:id/comments', commentsCtrl.create);


module.exports = router;