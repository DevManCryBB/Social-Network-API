const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  removeFriend,
  updateUser,
  deleteUser,
} = require('../../controllers/userControllers');
const { remove } = require('../../models/Reaction');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser);

// /api/user/:userId
router.route('/:userId/').delete(deleteUser);

// /api/applications/:userId/friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;