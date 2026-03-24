import "../styles/progress.css"

function ProgressBar({ current, total }) {
  const percent = ((current + 1) / total) * 100

  return (
    <div className="progress">

      <p className="progress-text">
        Question {current + 1} / {total}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

    </div>
  )
}

export default ProgressBar