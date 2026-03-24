import { useNavigate } from "react-router-dom"
import "../styles/result.css"

function Result({ score, total, lessonId, courseId, nextLessonId }) {
  const navigate = useNavigate()

  const percent = Math.round((score / total) * 100)

  return (
    <div className="result">

      <div className="card result-card">

        <h2>🎉 Lesson Completed!</h2>

        <p className="score">
          {score} / {total} ({percent}%)
        </p>

        {score === total && <p className="perfect">🔥 Perfect Score!</p>}

        <div className="result-actions">

          <button
            className="btn"
            onClick={() => navigate(`/courses/${courseId}`)}
          >
            ⬅ Back
          </button>

          {nextLessonId && (
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/lesson/${nextLessonId}`)}
            >
              ➡ Continue
            </button>
          )}

        </div>

      </div>

    </div>
  )
}

export default Result