const express = require('express');
const property = require('../queries/properties');
const router = express.Router();
const rooms = require('../queries/rooms');

router.get('/', function(req, res, next) {
  property.getProperties().then(data => {
    res.json(data);
  })
});
router.get('/:propertyId/rooms', function(req, res, next) {
  rooms.getPropertyRooms(req.params.propertyId).then(rooms => {
    res.json(rooms);
  })
});

module.exports = router;
