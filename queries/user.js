const knex = require('../db/knex');

function postMember(member) {
  return knex('member').insert({
      email: member.email,
      name: member.name,
      profilePic: member.profilePic,
  }).returning('*')
}
function getMembers() {
  return knex('member');
}


module.exports = {
  postMember,
  getMembers
};
