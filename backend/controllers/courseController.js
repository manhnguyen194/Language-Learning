const Course = require("../models/Course")

// CREATE
exports.createCourse = async (req, res) => {
  try {
    const course = new Course({
      ...req.body,
      createdBy: req.user.id,
    })

    await course.save()
    res.status(201).json(course)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// READ ALL
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// UPDATE
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(course)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// DELETE
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ message: "Course deleted" })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}