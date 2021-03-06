import React, {useState, useEffect, useContext } from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import { store } from "../store/store";

const Outer = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: #ecf0f1;
    display: flex;
    justify-content: space-around;
  }
`;

const Header = props => {
  const {context, showBars, state, pointArray} = props;
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [timeLeft, setTimeLeft] = useState(state.seconds);

  useEffect(() => {
    if (context.state.countDown) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (!timeLeft) {
        dispatch({type: "setTimeout", isTimeout: true});
        history.push("/timeout");
        setTimeLeft(0);
      }
      return () => clearInterval(intervalId);
    } else {
      const instantPoint = timeLeft * 10;
      const totalPoints = state.totalPoints + instantPoint;
      state.totalPoints = totalPoints;
      state.points = instantPoint;
      setTimeLeft(15);
    }
  }, [timeLeft, history, context]);

  return (
    <Outer>
      <div className="header">
        <p>Question {context.state.questionNo}/10</p>
        {showBars ? (
          <>
          <p>{pointArray.reduce((a, b) => a + b)} Points</p>
          <p>Remaining Time: {timeLeft}</p>
          </>
        ) : true}
      </div>
    </Outer>
  );
};

export default Header;
