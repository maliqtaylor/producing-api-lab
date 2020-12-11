const mongoose = require('mongoose')
const { Schema } = mongoose

const carSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: 2020
  },
  milage: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Car', carSchema)