import { useEffect, useContext } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const OAuthSuccess = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const token = params.get("token")

    if (token) {
      login(token)
      navigate("/")
    }
  }, [])

  return <p>Logging in...</p>
}

export default OAuthSuccess