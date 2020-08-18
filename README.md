# Token Authentication System

##### This repository is a simple token authentication system that I had done as a personal project. The insurance carriers we work with utlize a token system for authenticating requests made to their API. I wanted to take that same system and apply it to authenticating a user interface rather than API calls. Therefore, the back end on this project has three routes /login, /newUser, and /validate. /login is for existing users, the route returns a valid token if the user exists. /newUser creates the user and returns a valid token. /validate validates the token passed in. 

##### On the front end, users land on the login screen and have the choice to either create a new user or login. If the login request fails then they are returned the subsuquent error in red that their request has failed. If users are granted access then the token is stored in session storage and they are able to stay logged in even if they refresh or are away from their screen for a bit. Once users are logged in they then have the option to log out in which case clears the token from session storage and signs them out. 

##### I am also validating on the front end that the credentials they have entered are syntactically valid. For instance the username must be at least 10 characters long and the password must be at least 8 characters long with one uppercase letter, special character, and number.

##### This project was built using React, React-Bootstrap, Axios, Node.js, Express, MongoDB, and Mongoose. 