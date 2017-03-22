const knex = require('../db/knex');

function getPropertyRooms(propertyId) {
  return knex('room').where('propertyId', propertyId);
}

function getReservationRoom(roomId) {
  return knex('room').where('id', roomId).first();
}

module.exports = {
  getPropertyRooms,
  getReservationRoom
};
