const Post = require('../models/post');

module.exports = {
    create
}

async function create(req, res) {
    console.log('hittin create')
    req.body.allowComment = req.body.allowComment === 'on' ? true : false
    req.body.user = req.user.id
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    try{
        await post.save()
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/posts/${post._id}`)
}