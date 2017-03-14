
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reservation', (table) =>{
    table.increments();
    table.integer('propertyId').notNullable().unsigned().references('property.id').onDelete('cascade');
    table.integer('roomId').notNullable().unsigned().references('room.id').onDelete('cascade');
    table.integer('memberId').notNullable().unsigned().references('member.id').onDelete('cascade');
    table.text('checkinDate').notNullable();
    table.text('checkoutDate').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reservation')
};
