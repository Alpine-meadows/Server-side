const knex = require('../db/knex');
function getProperties() {
  return knex('property');
}

function getReservationProperty(propertyId) {
  return knex('property').where('id', propertyId).first()
}

module.exports = {
  getProperties,
  getReservationProperty
};
