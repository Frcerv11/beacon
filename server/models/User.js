const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
  	type: String,
  },
  urgent: {
  	type: Boolean,
  },
  supply: {
    type: String,
    trim: true,
  },
  longitude:{
    type: Number
  },
  latitude:{
    type: Number
  },
  created_at: Date,
  updated_at: Date
});


userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  
  next();
});

module.exports = mongoose.model('User', userSchema);
