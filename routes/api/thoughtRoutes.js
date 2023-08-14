const router = require('express').Router();
const {
  getthoughts,
  getsinglethought,
  createthought,
//   updateCourse,
//   deleteCourse,
} = require('../../controller/thought-controller');

// /api/courses
router.route('/').get(getthoughts).post(createthought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getsinglethought)
  .post(createthought)
//   .put(updatethought)
//   .delete(deleteCourse);

module.exports = router;