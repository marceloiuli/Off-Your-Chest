const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {type: String, required: true},
    rating: {type: Boolean},
}, {
    timestamps: true
})

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {type: String, required: true},
    content: {type: String, required: true},
    allowComment: {type: Boolean},
    comments: [commentSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);