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
`;

const Header = props => {
  const {context, showBars, value} = props;
  const history = useHistory();

  const [timeLeft, setTimeLeft] = useState(value.seconds);

  useEffect(() => {
    if (context.state.countDown) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      if (!timeLeft) {
        history.push("/timeout");
        setTimeLeft(0);
      }
      return () => clearInterval(intervalId);
    } else {
      setTimeLeft(15);
    }
  }, [timeLeft, history, context]);

  return (
    <Outer>
      <div className="header">
        <p>Question {context.state.questionNo}/10</p>
        {showBars ? (
          <>
          <p>{context.state.point} Points</p>
          <p>Remaining Time: {timeLeft}</p>
          </>
        ) : true}
      </div>
    </Outer>
  );
};

export default Header;
