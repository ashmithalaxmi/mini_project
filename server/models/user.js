const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  ID: Number,
  Name: String,
  Email : String,
  Password: String,
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
