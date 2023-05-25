const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtControllers');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').put(updateThought);
  
router.route('/:thoughtId').delete(deleteThought);

// /api/applications/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/applications/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;