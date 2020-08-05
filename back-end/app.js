const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postUser = require('./routes/newUser');
const validateUser = require('./routes/validateToken');
const newUser = require('./routes/getToken');
require('dotenv/config');

app.use(postUser);
app.use(newUser);
app.use(validateUser);

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to db'));


app.listen(7000, () => {
    console.log('server listening on 7000')
});