import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLessonById, getLessons } from "../services/lessonService"
import QuestionCard from "../components/QuestionCard"
import ProgressBar from "../components/ProgressBar"
import Result from "../components/Result"
import "../styles/gameLesson.css"
function GameLesson() {
  const { lessonId } = useParams()

  const [lesson, setLesson] = useState(null)
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [nextLessonId, setNextLessonId] = useState(null)

  useEffect(() => {
  const fetchLesson = async () => {
    try {
      setLoading(true)

      const data = await getLessonById(lessonId)
      setLesson(data)

      setCurrent(0)
      setScore(0)

      if (data?.course) {
        const lessons = await getLessons(data.course)

        const index = lessons.findIndex(
          (l) => l._id === lessonId
        )

        if (index !== -1 && index < lessons.length - 1) {
          setNextLessonId(lessons[index + 1]._id)
        } else {
          setNextLessonId(null)
        }
      }

    } catch (err) {
      setError("Failed to load lesson")
    } finally {
      setLoading(false)
    }
  }

  fetchLesson()
}, [lessonId])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!lesson) return <p>No lesson found</p>

  const questions = lesson?.questions || []
  
  if (!questions.length) {
    return <p>No questions available</p>
  }
  if (current >= questions.length) {
    return <Result
              score={score}
              total={questions.length}
              lessonId={lessonId}
              courseId={lesson?.course}
              nextLessonId={nextLessonId}
            />
  }
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1)

    setTimeout(() => {
      setCurrent((prev) => prev + 1)
    }, 1000)
  }

  return (
    <div className="game">

      <div className="game-container">

        <h2 className="game-title">{lesson.title}</h2>

        <ProgressBar current={current} total={questions.length} />

        <div className="card question-card-wrapper">
          <QuestionCard
            key={current}
            question={questions[current]}
            onAnswer={handleAnswer}
          />
        </div>

      </div>

    </div>
  )
}

export default GameLesson