/**
 * Vendor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      primaryKey: true,
      type: 'string',
      unique: true
    },

    name: {
      type: 'string'
    },

    offers: {
      collection: 'offer',
      via: 'vendor'
    }
  }
};

