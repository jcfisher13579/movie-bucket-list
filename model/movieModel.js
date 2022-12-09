const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;