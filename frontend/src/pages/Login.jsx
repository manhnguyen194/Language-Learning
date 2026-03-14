import { useState } from "react"
import { loginUser } from "../services/authService"
import { useNavigate, Link } from "react-router-dom"
import "../styles/Login.css"
import { FcGoogle } from "react-icons/fc";

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const data = await loginUser({ email, password })

      localStorage.setItem("token", data.token)

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

    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2 className="login-title">Login</h2>
        <p className="login-title">Please enter your Username and your Password</p>

        <input
          className="login-input"
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* <div className="forgot-row">
          <Link className="forgot-password" to="/forgot-password">
            Forgot?
          </Link>
        </div> */}

        {error && <p className="error-message">{error}</p>}

        <button className="login-button" type="submit">
          Login
        </button>
        <button
          className="google-button"
          type="button"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
          Or, Sign-in with Google
        </button>

        <p className="register-text">
          Not a member yet? 
          <Link className="register-link" to="/register">
            {" "}Register!
          </Link>
        </p>

      </form>

    </div>

  )

}

export default Login