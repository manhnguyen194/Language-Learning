import { useState, useContext } from "react"
import { loginUser } from "../services/authService"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

import "../styles/global.css"
import { FcGoogle } from "react-icons/fc"

function Login() {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext) 

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await loginUser({ email, password })

      login(data.token) 

      navigate("/home")

    } catch (error) {
      setError("Invalid username or password")
    }
  }

  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:5000/api/auth/google"
  }

  return (
    <div className="page-center">
      <form className="card" onSubmit={handleSubmit}>

        <h2 className="title">Login</h2>
        <p className="subtitle">Please enter your Username and your Password</p>

        <input
          className="input"
          type="email"
          placeholder="Username"
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

        {error && <p className="error">{error}</p>}

        <button className="btn btn-primary" type="submit">
          Login
        </button>

        <button
          className="btn btn-google"
          type="button"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
          Or, Sign-in with Google
        </button>

        <p className="text-center">
          Not a member yet? 
          <Link className="link" to="/register">
            {" "}Register!
          </Link>
        </p>

      </form>
    </div>
  )
}

export default Login