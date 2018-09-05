const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const Post = require('./model/post')
const app = express()
const url = 'mongodb://localhost/blogDb'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// login
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        User.find({
            email : req.body.email, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }  
        })
    });
})

// returns all blog posts
app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function(err) {
        if (err) throw err;
        Post.find({}, [], { sort: {_id: -1} }, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
        console.log('getAllPost works')
    });
})

// adds a new blog post
app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function(err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title, 
            description: req.body.description,
            content: req.body.description
        })
        post.save((err, doc) => {
            if (err) throw err;
            console.log('connection successful title is', post.title)
            return res.status(200).json({
                status: 'sucessful',
                data: doc
            })
        })
    })
})

// register new user
app.post('/api/user/register', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function(err) {
        if (err) throw err;
        const user = new User({
            email: req.body.email,
            password: req.body.password,
        })
        user.save((err, doc) => {
            if (err) throw err;
            console.log('registration successful, email is', user.email)
            return res.status(200).json({
                status: 'successful',
                data: doc
            })
        })
    })
})

app.listen(3000, () => console.log('blog server running on port 3000!'))