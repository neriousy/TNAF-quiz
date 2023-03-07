import React from "react";
import './NextQuestionButton.css'


export const NextQuestionButton = ({ onPress }) => {
  return(
    <button type="button" onClick={onPress} className="quizNextQuestionButton">Dalej</button>
  )
}