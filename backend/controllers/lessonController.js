const Lesson = require("../models/Lesson")

// CREATE
exports.createLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body)
    await lesson.save()
    res.status(201).json(lesson)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET lessons by course
exports.getLessonsByCourse = async (req, res) => {
  try {
    const lessons = await Lesson.find({ course: req.params.courseId })
    res.json(lessons)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE
exports.deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id)
    res.json({ message: "Lesson deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}