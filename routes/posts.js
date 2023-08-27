var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts')

// All actual paths start with "/posts"

router.get('/', postsCtrl.index)

router.get('/new', postsCtrl.new)

router.post('/', postsCtrl.create)

//router.get('/:id', postsCtrl.show)

module.exports = router;
