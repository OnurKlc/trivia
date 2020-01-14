import React, { useState, useEffect } from "react";

const Header = props => {
  const { context } = props;

  let seconds = 30;
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="header">
      <p>Question {context.state.questionNo}/10</p>
      <p>{context.state.point} Points</p>
      <p>Remaining Time: {timeLeft}</p>
    </div>
  );
};

export default Header;
