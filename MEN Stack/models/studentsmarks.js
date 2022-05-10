const mongoose = require('mongoose');

const StudentsMarksSchema = new mongoose.Schema({

  name:{
    type: String,
    required:true
  },
  cnslmarks:{
    type: Number,
    required:true
  },
  wadlmarks:{
    type: Number,
    required:true
  },
  cclmarks:{
    type: Number,
    required:true
  },
  dsbdalmarks:{
    type: Number,
    required:true
  }

})

module.exports = mongoose.model('Marks', StudentsMarksSchema)
