const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/posts");
//set up server
const server = express();
server.use(cors());
server.use(express.json());

function newPost(title, author, body) {
  new Post({
    title: title,
    author: author,
    body: body,
  })
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

server.get("/", (req, res) => res.send("hello world"));
server.post("/add-post", (req, res) => {
  newPost(req.body.title, req.body.author, req.body.body);
});

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

module.exports = server;
