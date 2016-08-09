/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

require("../models/Category")

module.exports = {
	all: function (req, res) {

  },

  menus: function (req, res) {
    CategoryService.mainMenus(function (data) {
      return res.json(data);
    });
  },

  submenu: function (req, res) {
    CategoryService.countByCategory(req.param("cid"), function (data) {
      return res.json(data);
    })
  }
};

