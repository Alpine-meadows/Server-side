const express = require('express');
const property = require('../queries/properties');
const router = express.Router();
const rooms = require('../queries/rooms');
const helper = require('../auth/_helpers');

router.get('/', function(req, res, next) {
  console.log(req.headers.Authorization);
  return helper.ensureAuthenticated(req, res, next)
});
router.get('/:propertyId/rooms', function(req, res, next) {
  rooms.getPropertyRooms(req.params.propertyId).then(rooms => {
    res.json(rooms);
  })
});

module.exports = router;
