const express = require("express");

const router = express.Router();

const courseController = require('../controllers/courseController');
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
// creating the routes


// get all the courses
router.get('/', courseController.getCourses);

// get single course
router.get('/:courseId', courseController.getCourse);

// create course
router.post('/', courseController.createCourse);

// delete course
router.delete("/:courseId", courseController.deleteCourse);

// update courses
router.put('/:courseId', courseController.updateCourses);


module.exports = router;