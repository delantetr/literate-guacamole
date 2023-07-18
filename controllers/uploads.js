const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' })
const { Albums, AlbumArt } = require('../models');
const withAuth = require('../utils/auth');

// Upload album art
router.post('/:id', withAuth, upload.single('albumArt'), async (req, res) => {
    try {
        // Access the uploaded image
        const filePath = req.file.filename;
        const originalName = req.file.originalname;

        // Get the existing album
        const albumID = req.params.id;
        const existingAlbum = await Albums.findByPk(albumID);
        
        if (!existingAlbum) {
            return res.status(404).json({ error: 'Album not found' });
        }

        // Create a new record in the AlbumArt table
        const newAlbumArt = await AlbumArt.create({
            filePath: filePath,
            originalName: originalName,
        });

        // Associate the Album with the new record
        existingAlbum.album_art_id = newAlbumArt.id;
        await existingAlbum.save();

        res.status(200).json({ message: 'Album art uploaded and associated with the existing album!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload album art or associate it with the existing album.' });
    }
});

module.exports = router;