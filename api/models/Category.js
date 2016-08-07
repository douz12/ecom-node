/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'String',
      primaryKey: true,
      unique: true
    },
    parent: {
      model: 'category'
    },

    category: {type: 'String'},

    subCategories: {
      collection: 'category',
      via: 'parent'
    },

    offers: {
      collection: 'offer',
      via: 'category'
    }
  }
};

