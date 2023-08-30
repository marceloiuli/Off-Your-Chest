const Post = require('../models/post')

module.exports = {
    new: newPost,
    create,
    index,
    show,
    delete: deletePost,
    edit,
    update
}

function newPost(req, res) {
    res.render('posts/new', {title: 'New Post Page', errorMsg: ''})
}

async function create(req, res) {
    req.body.allowComment = !!req.body.allowComment
    req.body.user = req.user.id
    try {
        await Post.create(req.body)
        res.redirect('/posts')
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

async function edit(req, res) {
    const post = await Post.findById(req.params.id)
    res.render('posts/edit', {title: 'Edit Post', post: post})
}

async function update(req, res) {
    req.body.allowComment = !!req.body.allowComment
    try {
        const updatedPost = await Post.findOneAndUpdate(
        {'_id': req.params.id, 'user': req.user._id},
        req.body,{new: true}
        );
        return res.redirect(`/posts/${updatedPost._id}`)
    } catch(err) {
        console.log(err)
        res.redirect('/posts')
    }
}