'use strict';
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
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    for (let bandIdx = 0; bandIdx < bandMusicians.length; bandIdx++) {
      const { name, musicians } = bandMusicians[bandIdx];
      const band = await Band.findOne({ where: { name } });
      for (let musicianIdx = 0; musicianIdx < musicians.length; musicianIdx++) {
        const musician = musicians[musicianIdx];
        // APPROACH ONE
        // =====================================================================
        // Use the create association method provided by the hasMany association
        // =====================================================================
        await band.createMusician(musician);
        // APPROACH TWO
        // =====================================================================
        // Create a new Musician with the band's id
        // =====================================================================
        // await Musician.create({ ...musician, bandId: band.id });
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
  }
};
