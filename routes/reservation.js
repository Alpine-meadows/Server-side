const express = require('express');
const reservation = require('../queries/reservation');
const router = express.Router();
const email = require('../queries/email');


router.post('/', function(req, res, next) {

  reservation.postReservation(req.body).then( resp => {
    email.sendEmail(req.body);
    res.json({
      reservation: req.body,
      room: resp
    });
  })
});

module.exports = router;
