const jwt = require('jsonwebtoken');
require('dotenv/config');

const verifyToken = (currToken) => {
    let response;
    jwt.verify(currToken, process.env.SECRET_KEY, function(err, decoded) {
        if (err) {
            response = 'Failed to authenticate token.'
        } else {
            response = decoded;
        }
    });
    return response;
}

module.exports = verifyToken;