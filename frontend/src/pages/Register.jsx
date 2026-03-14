import { useState } from "react"
import { registerUser } from "../services/authService"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Register.css"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    // check password match
    if(password !== confirmPassword){
      setMessage("Passwords do not match")
      return
    }

    try {

      const data = await registerUser({
        name,
        email,
        password
      })

      setMessage(data.message)

      setTimeout(()=>{
        navigate("/")
      },2000)

    } catch (error) {

      setMessage("Register failed")

    }

  }

  return (

    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2 className="register-title">Register</h2>
        <p className="register-title">Please enter your information</p>
        <input
          className="register-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        {message && <p className="register-message">{message}</p>}

        <button className="register-button" type="submit">
          Register
        </button>

        <p className="login-redirect">
          Already have an account?
          <Link className="login-link" to="/"> Login</Link>
        </p>

      </form>

    </div>

  )
}

export default Register