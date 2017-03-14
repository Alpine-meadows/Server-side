
exports.up = function(knex, Promise) {
  return knex.schema.createTable('room', (table) =>{
    table.increments();
    table.text('roomNumber').notNullable();
    table.integer('propertyId').notNullable().unsigned().references('property.id').onDelete('cascade');
    table.boolean('avalible').notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('room')
};
