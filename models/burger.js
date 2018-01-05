'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};