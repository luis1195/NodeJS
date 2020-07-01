const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,

});

module.exports = mongoose.model('tasks', TaskSchema);