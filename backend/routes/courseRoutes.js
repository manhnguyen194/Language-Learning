const express = require("express")
const admin = require("../middleware/adminMiddleware")
const router = express.Router()
const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse
} = require("../controllers/courseController")

const auth = require("../middleware/authMiddleware")

router.post("/", auth, admin, createCourse)
router.put("/:id", auth, admin, updateCourse)
router.delete("/:id", auth, admin, deleteCourse)

router.get("/", getCourses)

module.exports = router