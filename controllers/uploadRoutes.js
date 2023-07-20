const router = require('express').Router();
const { Albums, AlbumArt } = require('../models');
const withAuth = require('../utils/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/uploads/', // Specify your desired destination folder
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original filename for the uploaded file
    },
  }); 
  
  const upload = multer({ storage });

// Upload album art
router.post('/:id', withAuth, upload.single('albumArt'), async (req, res) => {
  try {
    console.log('File upload route reached');

    // Access the uploaded image
    const filePath = req.file.originalname;
    console.log('req.file', req.file);
    console.log(filePath);

    // Get the existing album
    const albumID = req.params.id;
    const existingAlbum = await Albums.findByPk(albumID);

    if (!existingAlbum) {
      return res.status(404).json({ error: 'Album not found' });
    }

    // Create a new record in the AlbumArt table
    const newAlbumArt = await AlbumArt.create({
      filePath: filePath,
    });

    // Associate the Album with the new record
    existingAlbum.album_art_id = newAlbumArt.id;
    await existingAlbum.save();

    // res.status(200).json({ message: 'Album art uploaded and associated with the existing album!' });
    res.redirect(`/api/albums/${albumID}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload album art or associate it with the existing album.' });
  }
});

module.exports = router;
