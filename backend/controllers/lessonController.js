const Lesson = require("../models/Lesson")

exports.createLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body)
    await lesson.save()
    res.status(201).json(lesson)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getLessonsByCourse = async (req, res) => {
  try {
    const lessons = await Lesson.find({ course: req.params.courseId }).sort({ createdAt: 1 })
    res.json(lessons)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
exports.getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" })
    }

    res.json(lesson)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(lesson)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id)
    res.json({ message: "Lesson deleted" })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}