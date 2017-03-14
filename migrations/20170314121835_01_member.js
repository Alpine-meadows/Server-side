
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', (table) =>{
    table.increments();
    table.text('email').unique().notNullable();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('profilePic');
    table.text('facebookId').unique().notNullable();
    table.boolean('active').notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('member')
};
