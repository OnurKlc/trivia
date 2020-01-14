import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";

const Outer = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: #ecf0f1;
    display: flex;
    justify-content: space-around;
  }
`

const Header = props => {
  const {context} = props;
  const history = useHistory();

  let seconds = 5;
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (!timeLeft) {
      // context.dispatch({ type: "timeout", value: true });
      clearInterval(intervalId);
      setTimeout(() => {
        history.push("/timeout");
      }, 350)
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Outer>
      <div className="header">
        <p>Question {context.state.questionNo}/10</p>
        <p>{context.state.point} Points</p>
        <p>Remaining Time: {timeLeft}</p>
      </div>
    </Outer>
  );
};

export default Header;
