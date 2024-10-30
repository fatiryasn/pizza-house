const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    comment:{
        type: String,
        required: true,
        trim: true
    },
    dateCreated:{
        type: Date,
        default: Date.now,
        required: true
    }
})

const Comment = mongoose.model('Comment', commentSchema, 'comments')
module.exports = Comment