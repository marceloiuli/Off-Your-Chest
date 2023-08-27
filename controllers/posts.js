const Post = require('../models/post')

module.exports = {
    new: newPost,
    create,
    index,
    //show
}

function newPost(req, res) {
    res.render('posts/new', {title: 'New Post Page', errorMsg: ''})
}

async function create(req, res) {
    try {
        await Post.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/posts/new')
    }
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { title: 'All Posts', posts });
}