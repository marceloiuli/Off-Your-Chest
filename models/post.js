const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const commentSchema = new Schema({
//     content: {type: String, required: true},
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
// }, {
//     timestamps: true
// })

const postSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    title: {type: String, required: true},
    content: {type: String, required: true},
    //allowComment: {type: Boolean},
    // comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);