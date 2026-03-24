const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const { register, login } = require("../controllers/authController")
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/authController")

const auth = require("../middleware/authMiddleware")
const admin = require("../middleware/adminMiddleware")
router.get(
  "/google",
  passport.authenticate("google", { scope:["profile","email"] })
)
router.get(
  "/google/callback",
  passport.authenticate("google", { session:false }),

  (req,res)=>{

    const token = jwt.sign(
      { id:req.user._id, role: user.role},
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
router.get("/users", auth, admin, getUsers)
router.post("/users", auth, admin, createUser)
router.put("/users/:id", auth, admin, updateUser)
router.delete("/users/:id", auth, admin, deleteUser)
module.exports = router