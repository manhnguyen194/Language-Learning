const Course = require("../models/Course")
const Lesson = require("../models/Lesson")

const seedData = async () => {
  try {

    const existing = await Course.findOne({ title: { $in: ["English Basics", "Japanese Basics"] } })
    if (existing) {
      console.log("✅ Seed data already exists")
      return
    }

    const englishCourse = await Course.create({
      title: "English Basics",
      description: "Learn basic English vocabulary",
      language: "English",
      level: "Beginner",
    })

    console.log("📘 English course created")

    await Lesson.insertMany([
      {
        title: "Basic Words",
        content: "Common English words",
        course: englishCourse._id,
        questions: [
          {
            type: "multiple_choice",
            question: "What is 'Apple' in Vietnamese?",
            options: ["Táo", "Cam", "Chuối"],
            answer: "Táo",
          },
          {
            type: "multiple_choice",
            question: "What is 'Dog' in Vietnamese?",
            options: ["Mèo", "Chó", "Cá"],
            answer: "Chó",
          },
          {
            type: "multiple_choice",
            question: "What is 'Water' in Vietnamese?",
            options: ["Nước", "Sữa", "Cà phê"],
            answer: "Nước",
          },
        ],
      },
      {
        title: "Simple Sentences",
        content: "Basic sentence structure",
        course: englishCourse._id,
        questions: [
          {
            type: "multiple_choice",
            question: "I ___ a student.",
            options: ["am", "is", "are"],
            answer: "am",
          },
          {
            type: "multiple_choice",
            question: "She ___ happy.",
            options: ["is", "am", "are"],
            answer: "is",
          },
          {
            type: "multiple_choice",
            question: "They ___ friends.",
            options: ["is", "am", "are"],
            answer: "are",
          },
        ],
      },
    ])

    console.log("📗 English lessons created")

    const japaneseCourse = await Course.create({
      title: "Japanese Basics",
      description: "Learn basic Japanese vocabulary",
      language: "Japanese",
      level: "Beginner",
    })

    console.log("📘 Japanese course created")

    await Lesson.insertMany([
      {
        title: "Basic Vocabulary",
        content: "Simple Japanese words",
        course: japaneseCourse._id,
        questions: [
          {
            type: "multiple_choice",
            question: "What is 'Apple' in Japanese?",
            options: ["りんご", "みかん", "バナナ"],
            answer: "りんご",
          },
          {
            type: "multiple_choice",
            question: "What is 'Water' in Japanese?",
            options: ["みず", "おちゃ", "ぎゅうにゅう"],
            answer: "みず",
          },
          {
            type: "multiple_choice",
            question: "What is 'Dog' in Japanese?",
            options: ["ねこ", "いぬ", "さかな"],
            answer: "いぬ",
          },
        ],
      },
      {
        title: "Basic Greetings",
        content: "Common Japanese greetings",
        course: japaneseCourse._id,
        questions: [
          {
            type: "multiple_choice",
            question: "Good morning in Japanese?",
            options: ["こんばんは", "おはよう", "ありがとう"],
            answer: "おはよう",
          },
          {
            type: "multiple_choice",
            question: "Thank you in Japanese?",
            options: ["ありがとう", "すみません", "こんにちは"],
            answer: "ありがとう",
          },
          {
            type: "multiple_choice",
            question: "Hello in Japanese?",
            options: ["こんにちは", "さようなら", "おやすみ"],
            answer: "こんにちは",
          },
        ],
      },
    ])

    console.log("📗 Japanese lessons created")

  } catch (err) {
    console.error("❌ Seed error:", err.message)
  }
}

module.exports = seedData