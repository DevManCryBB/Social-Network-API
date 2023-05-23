const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
} = require('../thoughtController');

// /api/comments
router.route('/').get(getThought).post(createThought);

// /api/comments/:commentId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;