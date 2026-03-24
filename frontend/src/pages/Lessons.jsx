import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  getLessons,
  createLesson,
  deleteLesson,
  updateLesson
} from "../services/lessonService"
import { AuthContext } from "../contexts/AuthContext"
import "../styles/lessons.css"

function Lessons() {
  const { courseId } = useParams()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [lessons, setLessons] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editingLesson, setEditingLesson] = useState(null)
  const [previewMode, setPreviewMode] = useState(false)

  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", ""], answer: "" },
  ])

  const fetchLessons = async () => {
    const data = await getLessons(courseId)
    setLessons(data)
  }

  useEffect(() => {
    fetchLessons()
  }, [])

  useEffect(() => {
    if (editingLesson) {
      setTitle(editingLesson.title)
      setContent(editingLesson.content)
      setQuestions(editingLesson.questions)
    }
  }, [editingLesson])

  // ===== QUESTION HANDLING =====
  const handleQuestionChange = (i, value) => {
    const newQ = [...questions]
    newQ[i].question = value
    setQuestions(newQ)
  }

  const handleOptionChange = (qi, oi, value) => {
    const newQ = [...questions]
    newQ[qi].options[oi] = value
    setQuestions(newQ)
  }

  const handleAnswerChange = (i, value) => {
    const newQ = [...questions]
    newQ[i].answer = value
    setQuestions(newQ)
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", ""], answer: "" }])
  }

  const removeQuestion = (i) => {
    setQuestions(questions.filter((_, index) => index !== i))
  }

  // ===== SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title) return alert("Title required")
    if (!questions.every(q => q.question && q.answer)) {
      return alert("Fill all questions")
    }

    const payload = {
      title,
      content,
      course: courseId,
      questions: questions.map(q => ({
        type: "multiple_choice",
        question: q.question,
        options: q.options,
        answer: q.answer,
      }))
    }

    if (editingLesson) {
      await updateLesson(editingLesson._id, payload)
      setEditingLesson(null)
    } else {
      await createLesson(payload)
    }

    setTitle("")
    setContent("")
    setQuestions([{ question: "", options: ["", "", ""], answer: "" }])

    fetchLessons()
  }

  const handleDelete = async (id) => {
    await deleteLesson(id)
    fetchLessons()
  }

  // ===== PREVIEW MODE =====
  if (previewMode) {
    return (
      <div className="preview">
        <h2>👁 Preview</h2>

        <div className="card">
          <h3>{title}</h3>

          {questions.map((q, i) => (
            <div key={i} className="question-preview">
              <p><strong>{q.question}</strong></p>
              {q.options.map((opt, j) => (
                <button key={j} className="btn btn-primary">
                  {opt}
                </button>
              ))}
            </div>
          ))}
        </div>

        <button className="btn" onClick={() => setPreviewMode(false)}>
          🔙 Back
        </button>
      </div>
    )
  }

  return (
    <div className="lessons">

      <h1>Lessons</h1>

      {/* ADMIN BUILDER */}
      {user?.role === "admin" && (
        <form className="card lesson-form" onSubmit={handleSubmit}>

          <h3>{editingLesson ? "Edit Lesson" : "Create Lesson"}</h3>

          <input
            className="input"
            placeholder="Lesson title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="input"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <h4>Questions</h4>

          {questions.map((q, qi) => (
            <div key={qi} className="question-box">

              <input
                className="input"
                placeholder="Question"
                value={q.question}
                onChange={(e) => handleQuestionChange(qi, e.target.value)}
              />

              {q.options.map((opt, oi) => (
                <input
                  key={oi}
                  className="input"
                  placeholder={`Option ${oi + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(qi, oi, e.target.value)}
                />
              ))}

              <input
                className="input"
                placeholder="Correct Answer"
                value={q.answer}
                onChange={(e) => handleAnswerChange(qi, e.target.value)}
              />

              {questions.length > 1 && (
                <button
                  type="button"
                  className="btn delete-btn"
                  onClick={() => removeQuestion(qi)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" className="btn" onClick={addQuestion}>
            ➕ Add Question
          </button>

          <button type="button" className="btn" onClick={() => setPreviewMode(true)}>
            👁 Preview
          </button>

          <button type="submit" className="btn btn-primary">
            {editingLesson ? "Update" : "Create"}
          </button>
        </form>
      )}

      {/* LESSON LIST */}
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <div className="card lesson-item" key={lesson._id}>

            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>

            <button
              className="btn btn-primary"
              onClick={() => navigate(`/lesson/${lesson._id}`)}
            >
              ▶ Start
            </button>

            {user?.role === "admin" && (
              <>
                <button className="btn" onClick={() => setEditingLesson(lesson)}>
                  ✏️ Edit
                </button>

                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(lesson._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Lessons