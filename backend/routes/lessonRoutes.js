const express = require("express")
const router = express.Router()

const {
  createLesson,
  getLessonsByCourse,
  deleteLesson,
  getLessonById,
  updateLesson
} = require("../controllers/lessonController")

const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware")
router.post("/", auth, admin, createLesson)
router.get("/single/:id", getLessonById)
router.get("/:courseId", getLessonsByCourse)
router.put("/:id", auth, admin, updateLesson)
router.delete("/:id", auth, admin, deleteLesson)

module.exports = router