'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [{
      burger_name: 'I dont bay leaf in magic burger',
      devoured: true
    }, {
      burger_name: 'A good manchego is hard to find burger',
      devoured: false
    }, {
      burger_name: 'shes a super leek burger',
      devoured: true
    }, {
      burger_name: 'Chorizo your own adventure burger',
      devoured: false
    }, {
      burger_name: 'Blue is the warmest cheese burger',
      devoured: false
    }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('burgers', null, {truncate:true});
  }
};