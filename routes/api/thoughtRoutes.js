const router = require('express').Router();
const {
  getthoughts,
  getsinglethought,
  createthought,
  updatethought,
  deletethought,
} = require('../../controller/thought-controller');

// /api/courses
router.route('/').get(getthoughts).post(createthought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getsinglethought)
  .post(createthought)
  .put(updatethought)
  .delete(deletethought);


  router.route('/:thoughtId/reactions')
  .post(createReaction);

  router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);
  
module.exports = router;