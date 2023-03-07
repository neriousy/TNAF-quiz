import React, {useState} from "react";
import './Quiz.css';
import { getQuestions } from "../../common/services/getQuestion";
import { Question } from "../Question/Question";
import { NextQuestionButton } from "../NextQuestionButton/NextQuestionButton";
import { QuizResults } from "../QuizResults/QuizResults";

export const Quiz = () => {
  const quizData = getQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showEnd, setShowEnd] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(0);

  const nextHandler = () => {
    if(currentQuestion === quizData.length){
      setShowEnd(1);  
      return;
    }else{
      setCurrentQuestion(prev => prev + 1);
      setShowResults(0);
    }
  }

  const checkAnwser = isCorrect => {
    if(showResults){
      return;
    }

    if(isCorrect){
      setScore(prev => prev + 1);
    }
    setShowResults(1);
  }



  return(
    <>
      <div className="quizContainer">
        <h3 className="quizHeader">
          <span>Pytanie {currentQuestion + ' / ' + quizData.length}</span>
        </h3>
        {showEnd > 0 && 
          <QuizResults score={score} amount={quizData.length}/>}
          
         
      {
        !showEnd && 
          <>
            <Question question={quizData[currentQuestion - 1]} correctHandler={checkAnwser} showResultsQuestion={showResults}/>
            <div className="quizButtonRow">
            <NextQuestionButton onPress={nextHandler}/>
            </div>
          </>
      }
     
      
      </div>
      
    </>
    
  );
}