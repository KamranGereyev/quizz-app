import React, {useState} from "react";
import './App.css';
import questions from "./questions"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false)
  }

  return (
    <div className="app">
      {
        showScore
        ? 
        <div className="section_score">
          <div>Правильных ответов {score} из {questions.length}</div>
          <button onClick={refresh} className="refresh_btn">Попробовать еще раз...</button>
        </div>
        : 
        <div className="quizz">
          <div className="question_section">
            <div className="question_count">
              <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
            </div>
            <div className="question_text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer_section">
            {questions[currentQuestion].answerOptions.map(item =>(
              <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
            )
            )}
          </div>
       </div>
      }
    </div>
  );
}

export default App;
