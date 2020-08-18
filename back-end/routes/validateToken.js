const express = require('express');
const app = express();
const verify = require('../validate');
const cors = require('cors');
require('dotenv/config');

app.get('/validate', async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        if(!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }

        (async () => {
            const tokenRes = await verify(token);
            if(tokenRes == 'Failed to authenticate token.') {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            } else {
                res.status(200).json(tokenRes)
            }
        })();
    } catch(err) {
        return res.status(500).json({"message":"There was a problem registering the user."}); 
    }
});

app.use(cors());

module.exports = app;