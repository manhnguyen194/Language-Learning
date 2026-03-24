const mongoose = require("mongoose")

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    questions: [
    {
        type: {
        type: String,
        },
        question: String,
        options: [String],
        answer: String,
    }
    ],
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Lesson", lessonSchema)