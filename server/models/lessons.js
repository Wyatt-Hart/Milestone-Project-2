//Lesson models (datasets for lesson entries)

// require mongoose 
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const lessonSchema = new Schema({
  title: {type: String, required: true},
  creator: {type: String, required: true},
  firstPub: {type: Date, required: true},
  lastPub: {type: Date, required: true},
  pic: {type: String, required: false},
  topic: {type: String, required: true},
  hasReact: {type: Boolean, required: true},
  hasMongo: {type: Boolean, required: true},
  hasExpress: {type: Boolean, required: true},
  content: {type: String, required: true}
})

//model and export
const Lesson = mongoose.model('Lesson', lessonSchema)
module.exports = Lesson