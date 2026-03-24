import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLessons } from "../services/lessonService"

function GameLesson() {
  const { courseId } = useParams()

  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const lessons = await getLessons(courseId)
      setQuestions(lessons[0]?.questions || [])
    }
    fetchData()
  }, [])

  const handleAnswer = (option) => {
    const correct = questions[current].answer

    if (option === correct) {
      setScore(score + 1)
    }

    setCurrent(current + 1)
  }

  if (!questions.length) return <p>Loading...</p>

  if (current >= questions.length) {
    return <h2>Score: {score}/{questions.length}</h2>
  }

  const q = questions[current]

  return (
    <div>
      <h2>{q.question}</h2>

      {q.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  )
}

export default GameLesson