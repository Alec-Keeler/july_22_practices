'use strict';
const { Band, Musician } = require('../models');
const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    // await queryInterface.bulkInsert('Musicians', [
    //   {
    //     bandId: 1,
    //     firstName: 'Adam',
    //     lastName: 'Appleby'
    //   },
    //   {
    //     bandId: 1,
    //     firstName: 'Anton',
    //     lastName: 'Martinovic'
    //   },
    //   {
    //     bandId: 1,
    //     firstName: 'Wilson',
    //     lastName: 'Holt'
    //   },
    //   {
    //     bandId: 2,
    //     firstName: 'Marine',
    //     lastName: 'Sweet'
    //   },
    //   {
    //     bandId: 2,
    //     firstName: 'Georgette',
    //     lastName: 'Kubo'
    //   },
    //   {
    //     bandId: 3,
    //     firstName: 'Aurora',
    //     lastName: 'Hase'
    //   },
    //   {
    //     bandId: 4,
    //     firstName: 'Trenton',
    //     lastName: 'Lesley'
    //   },
    //   {
    //     bandId: 4,
    //     firstName: 'Camila',
    //     lastName: 'Nenci'
    //   },
    //   {
    //     bandId: 5,
    //     firstName: 'Rosemarie',
    //     lastName: 'Affini'
    //   },
    //   {
    //     bandId: 5,
    //     firstName: 'Victoria',
    //     lastName: 'Cremonesi'
    //   },
    // ], {});
    for (let i = 0; i < bandMusicians.length; i++) {
      const band = bandMusicians[i];
      const { name, musicians } = band;
      const bandRecord = await Band.findOne({
        where: {name}
      })
      for (let j = 0; j < musicians.length; j++) {
        const musician = musicians[j];
        await Musician.create({
          firstName: musician.firstName,
          lastName: musician.lastName,
          bandId: bandRecord.id
        })
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Musicians', null, {})
  }
};
