'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Your code here
      Instrument.belongsToMany(models.Musician, {
        through: 'MusicianInstrument',  //JOIN musicianinstruments ON (instrument.id = musicianinstrument.instrumentId)
        foreignKey: 'instrumentId',
        otherKey: 'musicianId'  // JOIN musicians ON (musicianinstruments.musicianId = musicians.id)
      })
    }
  };
  Instrument.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Instrument',
  });
  return Instrument;
};