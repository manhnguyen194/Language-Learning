const express = require("express")
const router = express.Router()

const {
  createLesson,
  getLessonsByCourse,
  deleteLesson
} = require("../controllers/lessonController")

const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware")

// create lesson (admin only)
router.post("/", auth, admin, createLesson)

// get lessons of a course
router.get("/:courseId", getLessonsByCourse)

// delete lesson
router.delete("/:id", auth, admin, deleteLesson)

module.exports = router