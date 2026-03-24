const User = require("../models/User")
const bcrypt = require("bcryptjs")

const createAdmin = async () => {
  try {
    const adminEmail = "admin@gmail.com"
    const adminPassword = "123456"

    const existingAdmin = await User.findOne({ email: adminEmail })

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10)

      const admin = new User({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin"
      })

      await admin.save()

      console.log(" Admin account created")
      console.log(" Email:", adminEmail)
      console.log(" Password:", adminPassword)
    } else {
      console.log("ℹ Admin already exists")
    }

  } catch (err) {
    console.log(err)
  }
}

module.exports = createAdmin