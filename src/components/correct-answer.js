import React, { useEffect, useState, useContext, useRef} from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { store } from "../store/store"

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
  const {context, value, pointArray} = props;
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const [point, setPoint] = useState();
  const [totalPoint, setTotalPoint] = useState();

  const nextQuestion = () => {
    dispatch({type: "incrementQuestion"});
    dispatch({type: "countDown", countDown: true});
    value.value = "unanswered";
  };


  useEffect(() => {
    if (value.points !== 150) {
      const num = value.points;
      setPoint(num);
      setTotalPoint(value.totalPoints);
      dispatch({type: "setPoint", point: num});
    }
  }, [value]);

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
        {point !== 150 && point !== undefined ? pointArray.push(point) : true}
        {console.log(point)}
        {console.log(pointArray)}
        <p>You have earned {point !== 150 ? point : 150} points</p>
        <p>Total: {pointArray.reduce((a,b) => a + b)} points</p>
        <button onClick={nextQuestion}>Next Question</button>
      </div>
    </Outer>
  )
};

export default CorrectAnswer;