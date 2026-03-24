import { useState } from "react"
import "../styles/question.css"

function QuestionCard({ question, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleClick = (option) => {
    if (showAnswer) return

    setSelected(option)
    setShowAnswer(true)

    const isCorrect = option === question.answer
    onAnswer(isCorrect)
  }

  const getClass = (opt) => {
    if (!showAnswer) return "option"

    if (opt === question.answer) return "option correct"
    if (opt === selected) return "option wrong"

    return "option disabled"
  }

  return (
    <div className="question">

      <h3 className="question-title">{question.question}</h3>

      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={getClass(opt)}
            onClick={() => handleClick(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

    </div>
  )
}

export default QuestionCard