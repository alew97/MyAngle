const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./model/user')
const app = express()
const url = 'mongodb://localhost:27017/user'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        user.find({
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

app.listen(3000, () => console.log('blog server running on port 3000!'))