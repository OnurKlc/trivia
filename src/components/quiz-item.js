import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import context from "../temp/dummydata"

const disappear = keyframes`
  0% {transform: scale(1)}
  10% {transform: scale(1.5)}
  100% {transform: scale(0.5);}
`

const Outer = styled.div`
.outer {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .question-card {
    text-align: center;
    width: 550px;
    margin-top: 120px;
    padding: 15px;
    background-color: #1abc9c;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
  .choice-card {
    text-align: center;
    width: 550px;
    margin-top: 40px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
      background-color: #ecf0f1;
    }
  }
  & > .choice-card ~ .choice-card {
    margin-top: 20px;
  }
  }
  .timeout-class {
    animation: ${disappear} 0.3s ease-in-out forwards;
  }
`

const QuizItem = props => {
  const _context = props.context

  let _answers;
  const answerGenerator = () => {
    let incorrectAnswers = _context.state.data[_context.state.questionNo - 1].incorrect_answers;
    let correctAnswer = _context.state.data[_context.state.questionNo - 1].correct_answer;
    let randomNumber = Math.random() * incorrectAnswers.length;
    // if (!_context.state.timeout) {
      incorrectAnswers.splice(randomNumber, 0, correctAnswer);
    // }
    _answers = [...incorrectAnswers]
  };

  answerGenerator();

  return (
    <Outer>
      <div className={"outer " + (_context.state.timeout ? 'timeout-class' : null)}>
        <div className="question-card">
          <p><strong>Question:</strong> {_context.state.data[_context.state.questionNo - 1].question}</p>
        </div>
        {_answers.map(choice => (
          <div key={choice} className="choice-card">{choice}</div>
        ))}
      </div>
    </Outer>
  )
};

export default QuizItem;