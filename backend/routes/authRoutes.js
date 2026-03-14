const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const { register, login } = require("../controllers/authController")
router.get(
  "/google",
  passport.authenticate("google", { scope:["profile","email"] })
)
router.get(
  "/google/callback",
  passport.authenticate("google", { session:false }),

  (req,res)=>{

    const token = jwt.sign(
      { id:req.user._id },
      process.env.JWT_SECRET,
      { expiresIn:"7d" }
    )

    res.redirect(
      `http://localhost:5173/oauth-success?token=${token}`
    )

  }
)
router.post("/register", register)
router.post("/login", login)

module.exports = router