    'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type:String, required:true},
  type: {type:String, required:true, enum:['Metal', 'Not Metal']},
});

module.exports = mongoose.model('products', products);
