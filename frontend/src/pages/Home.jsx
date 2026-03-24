import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout() 
    navigate("/login") 
  }

  return (
    <div>
      <h1>Welcome to Language Learning Platform</h1>
      <p>You are logged in successfully.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
      <Link to="/courses">Go to Courses</Link>
    </div>
  )
}

export default Home