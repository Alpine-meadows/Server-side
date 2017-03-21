const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex.raw('delete from "member"; alter sequence member_id_seq restart with 2')
    .then(function () {
      const members = [{
        id: 1,
        email: 'mrkulwhip@gmail.com',
        firstName: 'Zac',
        lastName: 'Jocelyn',
        password: bcrypt.hashSync('bilnaby95', 10)
      }]
      return knex('member').insert(members);
    });
};
