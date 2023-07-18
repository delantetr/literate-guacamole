const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class AlbumArt extends Model {}

AlbumArt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'album_art',
  }
);

module.exports = AlbumArt;
