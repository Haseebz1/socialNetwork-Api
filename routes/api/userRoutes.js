const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    createUser
} = require('../../controller/user-controller');

// /api/courses
router.route('/').get(getUser).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .post(createUser);
  router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

  router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;