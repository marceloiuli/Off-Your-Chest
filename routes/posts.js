var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
// All actual paths start with "/posts"

router.get('/', postsCtrl.index)

router.get('/new', ensureLoggedIn, postsCtrl.new)

router.post('/', ensureLoggedIn, postsCtrl.create)

router.get('/:id', ensureLoggedIn, postsCtrl.show)

router.delete('/:id', postsCtrl.delete)

router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit)

router.put('/:id', postsCtrl.update)

module.exports = router;
