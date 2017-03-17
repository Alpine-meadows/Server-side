const express = require('express');
const reservation = require('../queries/reservation');
const router = express.Router();


router.post('/', function(req, res, next) {
  reservation.postReservation(req.body).then( resp => {
    res.json({
      reservation: req.body,
      room: resp
    });
  })
});

module.exports = router;
