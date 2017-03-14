var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex.raw('delete from "member"; alter sequence member_id_seq restart with 2')
    .then(function () {
      const members = [{
        id: 1,
        email: 'mrkulwhip@gmail.com',
        firstName: 'Zac',
        lastName: 'Jocelyn',
        profilePic: 'img',
        facebookId: 'EAAF7Lxm551YBADnRkUIZAGJ1GkXpwV0uGckyp4XYnatEX5gNDlvOgy8OOZAhMaXHnApnfLRgO7RZAwbB1XuAc8ZBzE9dMhof7xJ3dy6Vjrkdiw3ZAsAmlt0YlLvmdprkedvTxZCAFVEXZATRNCwowZCjZBE4UKyTeQK4tmRT8P0YppGCCONfHmFbA',
        active: true
      }]
      return knex('member').insert(members);
    });
};
