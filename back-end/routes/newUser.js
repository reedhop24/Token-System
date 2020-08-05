const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ActiveUser = require('../models/users');
const jwt = require('jsonwebtoken');
app.use(bodyParser());

app.post('/newUser', async (req, res) => {
    const user = new ActiveUser({
        Username: req.body.username,
        Password: req.body.password
    });
    try {
        const savedUser = await user.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours
        });
        return res.status(200).json({auth: true, token: token});
    }
    catch(err) {
        return res.status(500).json({"message":"There was a problem registering the user."}); 
    }
});

module.exports = app;
