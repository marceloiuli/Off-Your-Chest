const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//All routes start with '/' (root)
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);

router.delete('/comments/:id', commentsCtrl.delete);


module.exports = router;