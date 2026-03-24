import { Link } from "react-router-dom"
import "../styles/home.css"

function Home() {
  return (
    <div className="home">

      {/* HEADER */}
      <div className="home-header">
        <h1>Welcome back 👋</h1>
        <p>Continue your learning journey</p>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="card stat-card">
          <h3>📚 Courses</h3>
          <p>5</p>
        </div>

        <div className="card stat-card">
          <h3>🔥 Streak</h3>
          <p>7 days</p>
        </div>

        <div className="card stat-card">
          <h3>⭐ Points</h3>
          <p>1200</p>
        </div>
      </div>

      {/* COURSES */}
      <div className="courses-section">
        <h2>Your Courses</h2>

        <div className="course-grid">

          <Link to="/courses" className="card course-card">
            <h3>🇬🇧 English Basics</h3>
            <p>Progress: 60%</p>
            <div className="progress-bar">
              <div style={{ width: "60%" }}></div>
            </div>
          </Link>

          <Link to="/courses" className="card course-card">
            <h3>🇯🇵 Japanese N5</h3>
            <p>Progress: 30%</p>
            <div className="progress-bar">
              <div style={{ width: "30%" }}></div>
            </div>
          </Link>

          <Link to="/courses" className="card course-card">
            <h3>🇰🇷 Korean Beginner</h3>
            <p>Progress: 80%</p>
            <div className="progress-bar">
              <div style={{ width: "80%" }}></div>
            </div>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Home