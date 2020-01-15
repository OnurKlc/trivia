import React from "react";
import styled, {keyframes} from "styled-components";
import {useHistory} from "react-router-dom";

const disappear = keyframes`
  0% {transform: scale(1)}
  10% {transform: scale(1.2)}
  100% {transform: scale(0.5);}
`;

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
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
  .choice-card {
    text-align: center;
    width: 550px;
    margin-top: 40px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
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
`;

const QuizItem = props => {
  const { context, value } = props;
  const { dispatch } = context;

  let _answers;
  let correctAnswer;
  const answerGenerator = () => {
    let incorrectAnswers = context.state.data[context.state.questionNo - 1].incorrect_answers;
    correctAnswer = context.state.data[context.state.questionNo - 1].correct_answer;
    let randomNumber = Math.random() * incorrectAnswers.length;
    incorrectAnswers.splice(randomNumber, 0, correctAnswer);
    _answers = [...incorrectAnswers]
  };

  answerGenerator();

  const answerHandler = (choice) => {
    if (choice === correctAnswer) {
      value.value = "correct";
      value.points = value.seconds * 10;
      dispatch({type: "incrementPoint", point: value.points})
    } else {
      value.value = "incorrect";
      dispatch({type: "incrementPoint", point: 0})
    }
  };

  return (
    <Outer>
      <div className={"outer " + (context.state.timeout ? 'timeout-class' : null)}>
        <div className="question-card">
          <p><strong>Question:</strong> {context.state.data[context.state.questionNo - 1].question}</p>
        </div>
        {_answers.map(choice => (
          <div key={choice} onClick={() => answerHandler(choice)} className="choice-card">{choice}</div>
        ))}
      </div>
    </Outer>
  )
};

export default QuizItem;