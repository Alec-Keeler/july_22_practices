'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Your code here
      // related to one band
      Musician.belongsTo(models.Band, {foreignKey: 'bandId'})
      Musician.belongsToMany(models.Instrument, {
        through: 'MusicianInstrument',
        foreignKey: 'musicianId',
        otherKey: 'instrumentId'
      })
      // Musician.belongsTo(models.Instrument, {
      //   as: 'MuscianBelongsTo'
      // })
    }
  };
  Musician.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Musician',
  });
  return Musician;
};