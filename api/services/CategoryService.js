/**
 * Created by Ministre on 08/08/2016.
 */
module.exports = {
  mainMenus : function (done) {
    Category.find({}).exec(function (err, data) {
      if (err) sails.log(err);
      sails.log(data);
      done(data);
    })
  },

  breadCrumbs: function (cid, done) {
    Category.find({}).exec(function (err, data) {
      if (err) sails.log(err);
      delete data.offers;

    });
  },

  countByCategory: function (cid, done) {
    Category.findOne({id: cid}).populate('offers').exec(function (err, data) {
      if (err) sails.log(err);
      var size  = data.offers.length;
      data.offers = undefined;
      done({'size':size,'data':data});
    })
  }
};
