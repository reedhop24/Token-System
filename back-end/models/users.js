const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserModel', UserSchema);