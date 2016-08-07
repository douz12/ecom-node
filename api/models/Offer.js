/**
 * Offer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      primaryKey: true,
      unique: true,
      type: 'string'
    },

    price: 'float',

    category: {
      model: 'category'
    },

    products: {
      collection: 'product',
      via: 'offered',
      dominant: true
    },

    vendor: {
      model: 'vendor'
    }
  }
};

