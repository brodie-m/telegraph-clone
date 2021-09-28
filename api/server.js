const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Post = require('./models/posts')
//set up server
const server = express();
server.use(cors());
server.use(express.json())

server.get('/', (req, res) => res.send('hello world'))
server.get('/add-post', (req, res) => {
    const newPost = new Post({
        title: 'test post 2',
        author: 'brodie',
        body: 'this is a test post 2'
    })

    newPost.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

server.get('/all-posts', (req, res) => {
    Post.find()
        .then(result => {
            res.send(result)
        })
        .catch((error)=> {
            console.log(error)
        })
})

server.get('/single-post',(req,res) => {
    Post.findById(`615321dc912643518bd1828d`)
    .then(result => {
        res.send(result)
    })
    .catch((error)=> {
        console.log(error)
    })
})

//connect to mongoDB
const dbURI = "mongodb+srv://db-admin:db-password-1234@cluster0.t1ajl.mongodb.net/posts-db?retryWrites=true&w=majority"
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))

module.exports = server