const bcrypt = require('bcrypt');
const knex = require('../db/knex');
var localAuth = require('./local');
var property = require('../queries/properties')

function createMember(req) {
  const hash = bcrypt.hashSync(req.body.password, 10);
  return knex('member')
  .insert({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hash,
  })
  .returning('*');
}



function getMember(email) {
  return knex('member').where({email}).first();
}

function comparePass(memberPassword, databasePassword) {
  const bool = bcrypt.compareSync(memberPassword, databasePassword);
  if (!bool) throw new Error('bad password');
  else return true;
}

function ensureAuthenticated(req, res, next) {
  if (!(req.headers && req.headers.authorization)) {
    return res.status(400).json({
      status: 'Please log in'
    });
  }
  var header = req.headers.authorization.split(' ');
  var token = header[1];
  localAuth.decodeToken(token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: 'Token has expired'
      });
    } else {
      property.getProperties().then( data => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).json({
          status: 'error'
        });
      });
    }
  });
}

module.exports = {
  createMember,
  getMember,
  comparePass,
  ensureAuthenticated
};
