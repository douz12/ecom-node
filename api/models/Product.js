/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true
    },
    name: 'string',
    model: {type: 'String'},
    ean: {type: 'String'},
    brand: {type: 'String'},
    offered: {
      collection: 'offer',
      via: 'products'
    }
  }
};

