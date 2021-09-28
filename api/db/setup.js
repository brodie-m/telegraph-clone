import mongoose from 'mongoose'
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now}
})

const Post = mongoose.model('Post', postSchema);


mongoose.connect("mongodb://localhost:27017/posts")

db.posts.drop()

