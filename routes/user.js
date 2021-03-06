var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var authHelpers = require('../auth/_helpers')
var localAuth = require('../auth/local')


router.post('/', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let member;
  return authHelpers.getMember(email)
  .then((response) => {
    member = response;
    authHelpers.comparePass(password, response.password);
    return response;
  })
  .then((response) => { return localAuth.encodeToken(response); })
  .then((token) => {
    res.status(200).json({
      status: 'success',
      token: token,
      member: member
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      message: err,
      status: 'error'
    });
  });
});


module.exports = router;
