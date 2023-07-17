const router = require('express').Router();
const { Reviews, Albums, User } = require('../../models');

// Custom middleware for withAuth
const withAuth = require('../../utils/auth');


// CREATE a new review
router.post('/:id', withAuth, async (req, res) => {
  try {
    const album = await Albums.findByPk(req.params.id);
    console.log('Album:', album);

    if (!album) {
      console.log("Album not found");
      return res.status(404).json({ error: 'Album not found' });
    }
    const newReview = await Reviews.create({
      review_content: req.body.review_content,
      user_id: req.session.user_id,
      album_id: req.params.id
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a review
router.delete('delete/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Reviews.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a review
router.put('update/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Reviews.update(req.body.review_content, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(dbReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
