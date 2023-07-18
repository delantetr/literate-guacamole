const User = require('./Users');
const Albums = require('./Albums');
const Artists = require('./Artists');
const Reviews = require('./Reviews');
const AlbumArt = require('./albumArt');

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});

Artists.hasMany(Albums, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE',
});

Albums.belongsTo(Artists, {
    foreignKey: 'artist_id',
});

Albums.hasMany(Reviews, {
    foreignKey: 'album_id',
    onDelete: 'CASCADE',
});

Reviews.belongsTo(Albums, {
    foreignKey: 'album_id',
});

AlbumArt.hasOne(Albums, {
    foreignKey: 'album_art_id',
    onDelete: 'CASCADE',
})

Albums.belongsTo(AlbumArt, {
    foreignKey: 'album_art_id',
  });

module.exports = { User, Reviews, Artists, Albums, AlbumArt };
