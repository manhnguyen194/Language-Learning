const mongoose = require("mongoose")

const dropDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/elearning")

    await mongoose.connection.dropDatabase()

    console.log("✅ Database dropped")

    process.exit()
  } catch (err) {
    console.error("❌ Error:", err)
    process.exit(1)
  }
}

dropDB()