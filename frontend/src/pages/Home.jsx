import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/")

  }

  return (

    <div>

      <h1>Welcome to Language Learning Platform</h1>

      <p>You are logged in successfully.</p>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  )

}

export default Home