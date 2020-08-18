const express = require('express');
const app = express();
const ActiveUser = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv/config');

app.get('/login', async (req, res) => {
    try {
        const isValid = await ActiveUser.findOne({Username: req.query.username}, (err, user) => {
            if(err) {
                return res.status(500).json({message:"Error on the server."});
            } 
            if(!user) {
                return res.status(200).json({auth: false, message:"No user found."});
            }
            if(req.query.password != user.Password) {
                return res.status(200).json({auth:false, message:"Invalid password"});
            }
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
                expiresIn: 86400 // expires in 24 hours
            });
              
            res.status(200).send({ auth: true, token: token });
        });
    } catch(err) {
        return res.status(500).json({"message":"There was a problem registering the user."}); 
    }
});

module.exports = app;