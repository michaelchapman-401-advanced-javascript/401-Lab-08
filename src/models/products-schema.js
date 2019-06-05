    'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type:String, required:true},
  type: {type:String, required:true, uppercase:true, enum:['R', 'L']},
});

module.exports = mongoose.model('products', products);
