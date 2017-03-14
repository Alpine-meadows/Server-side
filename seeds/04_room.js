exports.seed = function(knex, Promise) {
  return knex.raw('delete from "room"; alter sequence room_id_seq restart with 64')
    .then(function () {
      const rooms = [{
        id: 1,
        roomNumber: '101',
        propertyId: 1 ,
      },{
        id: 2,
        roomNumber: '102',
        propertyId: 1 ,
      },{
        id: 3,
        roomNumber: '103',
        propertyId: 1 ,
      },{
        id: 4,
        roomNumber: '104',
        propertyId: 1 ,
      },{
        id: 5,
        roomNumber: '105',
        propertyId: 1 ,
      },{
        id: 6,
        roomNumber: '106',
        propertyId: 1 ,
      },{
        id: 7,
        roomNumber: '201',
        propertyId: 1 ,
      },{
        id: 8,
        roomNumber: '202',
        propertyId: 1 ,
      },{
        id: 9,
        roomNumber: '203',
        propertyId: 1 ,
      },{
        id: 10,
        roomNumber: '204',
        propertyId: 1 ,
      },{
        id: 11,
        roomNumber: '205',
        propertyId: 1 ,
      },{
        id: 12,
        roomNumber: '206',
        propertyId: 1 ,
      },{
        id: 13,
        roomNumber: '301',
        propertyId: 1 ,
      },{
        id: 14,
        roomNumber: '302',
        propertyId: 1 ,
      },{
        id: 15,
        roomNumber: '305',
        propertyId: 1 ,
      },{
        id: 16,
        roomNumber: 'Baldy Bear',
        propertyId: 2 ,
      },{
        id: 17,
        roomNumber: '104',
        propertyId: 3 ,
      },{
        id: 18,
        roomNumber: 'B14',
        propertyId: 4 ,
      },{
        id: 19,
        roomNumber: 'B05',
        propertyId: 4 ,
      },{
        id: 20,
        roomNumber: 'A1',
        propertyId: 5 ,
      },{
        id: 21,
        roomNumber: 'A2',
        propertyId: 5 ,
      },{
        id: 22,
        roomNumber: 'B1',
        propertyId: 5 ,
      },{
        id: 23,
        roomNumber: 'B2',
        propertyId: 5 ,
      },{
        id: 24,
        roomNumber: 'B3',
        propertyId: 5 ,
      },{
        id: 25,
        roomNumber: 'C1',
        propertyId: 5 ,
      },{
        id: 26,
        roomNumber: 'C2',
        propertyId: 5 ,
      },{
        id: 27,
        roomNumber: 'D1',
        propertyId: 5 ,
      },{
        id: 28,
        roomNumber: 'D2',
        propertyId: 5 ,
      },{
        id: 29,
        roomNumber: 'E1',
        propertyId: 5 ,
      },{
        id: 30,
        roomNumber: 'E2',
        propertyId: 5 ,
      },{
        id: 31,
        roomNumber: 'E3',
        propertyId: 5 ,
      },{
        id: 32,
        roomNumber: 'F1',
        propertyId: 5 ,
      },{
        id: 33,
        roomNumber: 'F2',
        propertyId: 5 ,
      },{
        id: 34,
        roomNumber: 'F3',
        propertyId: 5 ,
      },{
        id: 35,
        roomNumber: 'G1',
        propertyId: 5 ,
      },{
        id: 36,
        roomNumber: 'G2',
        propertyId: 5 ,
      },{
        id: 37,
        roomNumber: 'G3',
        propertyId: 5 ,
      },{
        id: 38,
        roomNumber: 'H1',
        propertyId: 5 ,
      },{
        id: 39,
        roomNumber: 'H2',
        propertyId: 5 ,
      },{
        id: 40,
        roomNumber: 'H3',
        propertyId: 5 ,
      },{
        id: 41,
        roomNumber: 'J1',
        propertyId: 5 ,
      },{
        id: 42,
        roomNumber: 'J2',
        propertyId: 5 ,
      },{
        id: 43,
        roomNumber: 'CUL1',
        propertyId: 5 ,
      },{
        id: 44,
        roomNumber: 'CUL2',
        propertyId: 5 ,
      },{
        id: 45,
        roomNumber: 'Huas Crisler',
        propertyId: 6 ,
      },{
        id: 46,
        roomNumber: '11',
        propertyId: 7 ,
      },{
        id: 47,
        roomNumber: '41',
        propertyId: 8 ,
      },{
        id: 48,
        roomNumber: '45',
        propertyId: 8 ,
      },{
        id: 49,
        roomNumber: '47',
        propertyId: 8 ,
      },{
        id: 50,
        roomNumber: '49',
        propertyId: 8 ,
      },{
        id: 51,
        roomNumber: '51',
        propertyId: 8 ,
      },{
        id: 52,
        roomNumber: '59',
        propertyId: 8 ,
      },{
        id: 53,
        roomNumber: 'A',
        propertyId: 9 ,
      },{
        id: 54,
        roomNumber: 'B',
        propertyId: 9 ,
      },{
        id: 55,
        roomNumber: 'C',
        propertyId: 9 ,
      },{
        id: 56,
        roomNumber: 'D',
        propertyId: 9 ,
      },{
        id: 57,
        roomNumber: 'E',
        propertyId: 9 ,
      },{
        id: 58,
        roomNumber: 'F',
        propertyId: 9 ,
      },{
        id: 59,
        roomNumber: 'G',
        propertyId: 9 ,
      },{
        id: 60,
        roomNumber: '101',
        propertyId: 10 ,
      },{
        id: 61,
        roomNumber: '1000',
        propertyId: 11 ,
      },{
        id: 62,
        roomNumber: '1004',
        propertyId: 11 ,
      },{
        id: 63,
        roomNumber: '1006',
        propertyId: 11 ,
      },]
      return knex('room').insert(rooms);
    });
};
