import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Context from "../context/context";

const Outer = styled.div`
  .header {
    width: 100%;
    height: 50px;
    background-color: #ecf0f1;
    display: flex;
    justify-content: space-around;
  }
`;

function Quiz() {
  let seconds = 30;
  const [timeLeft, setTimeLeft] = useState(seconds);
  let data = useContext(Context);

  useEffect(() => {
    if (!timeLeft) return;
    console.log(data);

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Outer>
      <Context.Consumer>
        {context => (
          <>
            <div className="header">
              <p>Question {context.questionNo}/10</p>
              <p>{context.point} Points</p>
              <p>Remaining Time: {timeLeft}</p>
            </div>
            <p>{context.data.question}</p>
          </>
        )}
      </Context.Consumer>
    </Outer>
  );
}

export default Quiz;
