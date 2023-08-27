const Post = require('../models/post')

module.exports = {
    new: newPost,
    create,
    index,
    show,
    delete: deletePost
}

function newPost(req, res) {
    res.render('posts/new', {title: 'New Post Page', errorMsg: ''})
}

async function create(req, res) {
    req.body.allowComment = req.body.allowComment === 'on' ? true : false
    req.body.user = req.user.id
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

async function show(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.render('posts/show', {title: 'Post Details', post})
    } catch (err) {
        console.log(err)
        res.render('posts/', {errorMsg: err.message})
    }
}

async function deletePost(req, res) {
    await Post.findOneAndDelete({
        '_id': req.params.id,
        'user': req.user.id
    })
    res.redirect('/posts/');
}