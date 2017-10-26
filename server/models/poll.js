// require mongoose
var mongoose = require('mongoose');
// create the schema
var SurveySchema = new mongoose.Schema({
  name: {type:String},
  question: {type:String},
  option1: {type:String},
  option2: {type:String},
  option3: {type:String},
  option4: {type:String},
  vote1:{type:Number},
  vote2:{type:Number},
  vote3:{type:Number},
  vote4:{type:Number}

  
},{timestamps: true })
// register the schema as a model
var Poll = mongoose.model('Poll', SurveySchema);
