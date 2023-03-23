import React from "react";
import PrintQue from "./question";
import './Quiz.css'
import { quiz } from "./QuizQue";

function App() {
  return (
    <>
      <div className="main_box">
      {quiz.length>=5?<h1>Play Quiz</h1>:''}
        <PrintQue />
      </div>
    </>
  )
}

export default App