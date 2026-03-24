import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import "../styles/sidebar.css"

function Sidebar() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      <div>
        <button 
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>

        <h2 className="sidebar-logo">
          {collapsed ? "🌍" : "🌍 Learn"}
        </h2>

        <nav className="sidebar-nav">
          <Link to="/home" className="sidebar-link">🏠 {!collapsed && "Home"}</Link>
          <Link to="/courses" className="sidebar-link">📚 {!collapsed && "Courses"}</Link>
          <Link to="/about" className="sidebar-link">👤 {!collapsed && "About"}</Link>
          <Link to="/settings" className="sidebar-link">⚙️ {!collapsed && "Settings"}</Link>
        </nav>
      </div>

      <div className="sidebar-logout">
        <button className="btn btn-primary" onClick={handleLogout}>
          {!collapsed ? "Logout" : "⏻"}
        </button>
      </div>

    </div>
  )
}

export default Sidebar