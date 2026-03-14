const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const passport = require("./config/passport")
const session = require("express-session")

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
  })
)

app.use(passport.initialize())
app.use(passport.session())
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})