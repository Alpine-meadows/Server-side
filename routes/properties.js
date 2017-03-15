const express = require('express');
const property = require('../queries/properties');
const router = express.Router();

router.get('/', function(req, res, next) {
  property.getProperties().then(data => {
    res.json(data);
  })
});

module.exports = router;
