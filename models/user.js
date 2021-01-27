const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
});

const Users = mongoose.model('user', userSchema);

module.exports = Users;
