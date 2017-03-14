
exports.up = function(knex, Promise) {
  return knex.schema.createTable('property', (table) =>{
    table.increments();
    table.text('name').unique().notNullable();
    table.text('location').notNullable();
    table.text('picture').notNullable();
    table.integer('numberOfRooms');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('property')
};
