import React, { useContext } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { store } from "../store/store";

const animationData = require('../assets/8808-correct-animation.json');

const Outer = styled.div`
.circle-wrapper {
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 50%;
text-align: center;
}
button {
width: 200px;
padding: 5px 0;
}
`;

const CorrectAnswer = (props) => {
  const {context, value} = props;
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const nextQuestion = () => {
    dispatch({type: "incrementQuestion"});
    value.value = "unanswered";
    value.seconds = 30;
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Outer>
      <Lottie options={defaultOptions}
              width={300}
              height={300}
              isStopped={false}
              isPaused={false}
      />
      <div className="circle-wrapper">
        <p>Correct!</p>
        <p>You have earned {value.points} points</p>
        <p>Total: {context.totalPoints} points</p>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </Outer>
  )
};

export default CorrectAnswer;