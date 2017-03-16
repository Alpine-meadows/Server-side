const knex = require('../db/knex');

function getPropertyRooms(propertyId) {
  return knex('room').where('propertyId', propertyId);
}

module.exports = {
  getPropertyRooms,
};
