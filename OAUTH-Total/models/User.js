const mongoose = require('mongoose');

// creating UserSchema
const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
})


// creating UserModel
module.exports = User = mongoose.model('user', UserSchema);