import React from "react";
import './Question.css'
import { QuestionOption } from "../QuestionOption/QuestionOption";

export const Question = ({question, correctHandler, showResultsQuestion}) => {
  const {text, correct, options} = question;
  const clickHandler = (isCorrect) => {correctHandler(isCorrect)};
  

  return(
    <div className="questionContainer">
      <span>{text}</span>
      <div className="verticalDivider"></div>

      <div className="questionAnwsers">
        {options.map((option) =>
        (<QuestionOption key={option.id} correctAnwser={correct} showColors={showResultsQuestion} optionHandler={clickHandler} isCorrect={option.id === correct} text={option.answer}/>))}   
      </div>
    </div>
  )
}