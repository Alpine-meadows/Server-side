exports.seed = function(knex, Promise) {
  return knex.raw('delete from "reservation"; alter sequence reservation_id_seq restart with 2')
    .then(function () {
      const reservations = [{
        id: 1,
        propertyId: 1,
        roomId: 1,
        memberId: 1,
        checkinDate: '3-14-17',
        checkoutDate: '3-16-17'
      }]
      return knex('reservation').insert(reservations);
    });
};
