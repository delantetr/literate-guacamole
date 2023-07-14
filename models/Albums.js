const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Album extends Model {}

Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'review',
        key: 'id',
      }
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'artist',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'album',
  }
);

module.exports = Album;