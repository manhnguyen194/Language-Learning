import { useState } from "react"
import { registerUser } from "../services/authService"
import { Link, useNavigate } from "react-router-dom"

import "../styles/global.css"
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

    <div className="page-center">

      <form className="card" onSubmit={handleSubmit}>

        <h2 className="title">Register</h2>
        <p className="subtitle">Please enter your information</p>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        {message && <p className="error">{message}</p>}

        <button className="btn btn-primary" type="submit">
          Register
        </button>

        <p className="text-center">
          Already have an account?
          <Link className="link" to="/"> Login</Link>
        </p>

      </form>

    </div>

  )
}

export default Register