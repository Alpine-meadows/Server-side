
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', (table) =>{
    table.increments();
    table.text('username').unique().notNullable();
    table.text('password').notNullable();
    table.boolean('active').notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin')
};
