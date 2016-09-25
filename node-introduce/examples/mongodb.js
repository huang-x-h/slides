'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/node_chat', function (error) {
  if (error) {
    console.log(error);
  }
});

// Mongoose Schema definition
const Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  password: String
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

User.find({}, function (err, users) {
  console.log(users);
});