const mongoose = require ('mongoose')

const listSchema =mongoose.Schema({
  name:String,
  description:String
});

const todomodel =mongoose.model('todo',listSchema)
module.exports = todomodel;