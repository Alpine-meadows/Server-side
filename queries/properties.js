const knex = require('../db/knex');

function getProperties() {
  return knex('property');
}

module.exports = {
  getProperties,
};
