import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import {
  getLessons,
  createLesson,
  deleteLesson
} from "../services/lessonService"
import { AuthContext } from "../contexts/AuthContext"

function Lessons() {
  const { courseId } = useParams()
  const { user } = useContext(AuthContext)

  const [lessons, setLessons] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const fetchLessons = async () => {
    const data = await getLessons(courseId)
    setLessons(data)
  }

  useEffect(() => {
    fetchLessons()
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()

    await createLesson({
      title,
      content,
      course: courseId,
    })

    setTitle("")
    setContent("")
    fetchLessons()
  }

  const handleDelete = async (id) => {
    await deleteLesson(id)
    fetchLessons()
  }

  return (
    <div>
      <h1>Lessons</h1>

      {user?.role === "admin" && (
        <form onSubmit={handleCreate}>
          <input
            placeholder="Lesson title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Create Lesson</button>
        </form>
      )}

      <ul>
        {lessons.map((lesson) => (
          <li key={lesson._id}>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>

            {user?.role === "admin" && (
              <button onClick={() => handleDelete(lesson._id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lessons