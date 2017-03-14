const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex.raw('delete from "admin"; alter sequence admin_id_seq restart with 3')
    .then(function () {
      const admins = [{
        id: 1,
        username: 'zacj',
        password: bcrypt.hashSync('bilnaby95', 10),
        active: true
      },{
        id: 2,
        username: 'libbyj',
        password: bcrypt.hashSync('bilnaby64', 10),
        active: true
      }]
      return knex('admin').insert(admins);
    });
};
