const express = require('express');
const reservationQueries = require('../queries/reservation');
const router = express.Router();
const email = require('../queries/email');
const property = require('../queries/properties');
const room = require('../queries/rooms');


router.post('/', function(req, res, next) {

  reservationQueries.postReservation(req.body).then( resp => {
    email.sendEmail(req.body);
    res.json({
      reservation: req.body,
      room: resp
    });
  })
});

router.get('/:id', function(req, res, next) {
  reservationQueries.getMemberReservation(req.params.id)
  .then( data => {
    return Promise.all(data.map(reservation => {
      return property.getReservationProperty(reservation.propertyId)
      .then(property => {
        reservation.property = property
        return room.getReservationRoom(reservation.roomId)
        .then(room => {
          reservation.room = room
          return reservation;
        })
      })
    }));
  })
  .then(reservations => {
    console.log('reservations', reservations);
    res.json(reservations);
  })
});

module.exports = router;
