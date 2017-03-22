const knex = require('../db/knex');

function postReservation(reservation) {
  return knex('reservation').insert({
      propertyId: reservation.propertyId,
      roomId: reservation.roomId,
      memberId: reservation.memberId,
      checkinDate: reservation.start,
      checkoutDate: reservation.end
  }).returning('*')
  .then( reservation => {
    return reservation, knex('room')
      .where('id', reservation[0].roomId)
      .update({
        'avalible': false
      }).returning('*')
  })
}

function getMemberReservation(memberId) {
  return knex('reservation')
  .where('memberId', memberId)
  .returning('*')
}


module.exports = {
  postReservation,
  getMemberReservation
};
