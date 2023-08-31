const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    req.body.allowComment = !!req.body.allowComment
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

async function deleteComment(req, res) {
    const post = await Post.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id
    });
    if (!post) return res.redirect('/posts');
    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`);
}