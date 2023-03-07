import React from "react";
import './QuestionOption.css'


export const QuestionOption = ({text, showColors, isCorrect, optionHandler}) => {

  let classes = showColors ? (isCorrect ? "questionOptionButton correct" : "questionOptionButton wrong") : "questionOptionButton";

  const handleClick = () => {
    optionHandler(isCorrect); 
    
  }
  
  return(
    <button className={classes} onClick={handleClick}>
      {text}
    </button>
  )

}