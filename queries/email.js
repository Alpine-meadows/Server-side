const nodemailer = require('nodemailer');
const moment = require('moment');
const knex = require('../db/knex');

function sendEmail(body) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'alpinemeadowsmanagement@gmail.com',
        pass: 'bilnaby95'
    }
  });
  knex('member')
    .where('id', body.memberId)
    .returning('*').first()
    .then( member => {
      let text = `
      Thank you ${member.firstName} for your reservation here is a reminder on where and when it is.
      Property: ${body.property.name}
      Address: ${body.property.location}
      Room: ${body.room.roomNumber}
      Checkin Date: ${moment(body.start).format("MMM Do YYYY")}
      Checkout Date: ${moment(body.end).format("MMM Do YYYY")}
      `
      let mailOptions = {
          from: 'alpinemeadowsmanagement@gmail.com',
          to: member.email,
          subject: 'Alpine Meadows Reservaiton Conformation',
          text: text
      };
      transporter.sendMail(mailOptions, function(error, info){
          if(error){
              console.log(error);
          }else{
              console.log('Message sent: ' + info.response);
          };
      });
    })
}

module.exports = {
  sendEmail,
};
