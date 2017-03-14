exports.seed = function(knex, Promise) {
  return knex.raw('delete from "property"; alter sequence room_id_seq restart with 12')
    .then(function () {
      const properties = [{
        id: 1,
        name: 'Alpen Rose',
        location: '400 South French St. Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/qWm30W7.jpg',
        numberOfRooms: 15
      },{
        id: 2,
        name: 'Baldy Bear',
        location: '32 Summit County Road 524 Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/Brs0JP3.jpg',
        numberOfRooms: 1
      },{
        id: 3,
        name: 'Der Steiermark',
        location: '600 South Park Avenue, Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/lpyE9Zd.jpg',
        numberOfRooms: 1
      },{
        id: 4,
        name: "Four O'clock",
        location: "4 O'Clock Rd, Breckenridge, CO 80424",
        picture: 'http://i.imgur.com/ZrgSljj.jpg',
        numberOfRooms: 2
      },{
        id: 5,
        name: 'French Ridge',
        location: '400 S Ridge St, Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/W2TNxUT.jpg',
        numberOfRooms: 25
      },{
        id: 6,
        name: 'Haus Crisler',
        location: 'Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/JvfQO5i.jpg',
        numberOfRooms: 1
      },{
        id: 7,
        name: 'Inner Circle',
        location: '820 Columbine Rd, Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/HpHElvE.jpg',
        numberOfRooms: 1
      },{
        id: 8,
        name: 'Rock Ridge',
        location: '41 Atlantic Load Rd, Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/9DFmQ2x.jpg',
        numberOfRooms: 6
      },{
        id: 9,
        name: 'Val Chatelle',
        location: '109 Alpine Dr, Frisco, CO 80443',
        picture: 'http://i.imgur.com/m6IlZ5i.jpg',
        numberOfRooms: 6
      },{
        id: 10,
        name: 'Village Point',
        location: '535 South Park, Avenue 133 Broken Lance Dr. Breckenridge, CO 80124',
        picture: 'http://i.imgur.com/tf0dMeU.jpg',
        numberOfRooms: 1
      },{
        id: 11,
        name: 'Rock Ridge II',
        location: '1000 Atlantic Lode Dr. Breckenridge, CO 80424',
        picture: 'http://i.imgur.com/0n6i3wG.jpg',
        numberOfRooms: 3
      }]
      return knex('property').insert(properties);
    });
};
