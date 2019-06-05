'use strict';

const uuid = require('uuid/v4');

class Products {
  constructor() {
  }

  get(id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  post(entry) {
    let record = new schema(entry);
    return record.save();
  }

  put(id, entry) {
    return schema.findByIdAndUpdate(_id, record, {new:true});
  }

  delete(id) {
    return schema.findByIdAndDelete(_id);
  }
}

module.exports = Products;
