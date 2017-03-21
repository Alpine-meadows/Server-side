
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) =>{
    table.increments();
    table.text('email').unique().notNullable();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member')
};
