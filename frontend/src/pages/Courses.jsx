import { useEffect, useState, useContext } from "react"
import {
  getCourses,
  createCourse,
  deleteCourse,
} from "../services/courseService"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import "../styles/courses.css"

function Courses() {
  const { user } = useContext(AuthContext)
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState("")
  const [language, setLanguage] = useState("")

  const fetchCourses = async () => {
    const data = await getCourses()
    setCourses(data)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()

    await createCourse({
      title,
      language,
      level: "Beginner",
    })

    setTitle("")
    setLanguage("")
    fetchCourses()
  }

  const handleDelete = async (id) => {
    await deleteCourse(id)
    fetchCourses()
  }

  return (
    <div className="courses">

      {/* HEADER */}
      <div className="courses-header">
        <h1>Courses</h1>
        <p>Explore and manage your learning</p>
      </div>

      {/* ADMIN CREATE */}
      {user?.role === "admin" && (
        <form className="card create-form" onSubmit={handleCreate}>
          <h3>Create Course</h3>

          <input
            className="input"
            placeholder="Course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="input"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      )}

      {/* COURSE LIST */}
      <div className="course-grid">
        {courses.map((course) => (
          <div className="card course-item" key={course._id}>

            <h3>{course.title}</h3>
            <p>{course.language}</p>

            <Link
              to={`/courses/${course._id}`}
              className="btn btn-primary"
            >
              View Lessons
            </Link>

            {user?.role === "admin" && (
              <button
                className="btn delete-btn"
                onClick={() => handleDelete(course._id)}
              >
                Delete
              </button>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}

export default Courses