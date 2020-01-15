import React, { useState } from "react";
import {store} from "../store/store";
import Header from "../components/header";
import QuizItem from "../components/quiz-item";
import CorrectAnswer from "../components/correct-answer";
import WrongAnswer from "../components/wrong-answer";


function Quiz() {
  const [state, setState] = useState({value: "unanswered", points: 0, totalPoints: 0, seconds: 15});

  return (
    <store.Consumer>
      {context => (
        <>
          <Header context={context} showBars={state.value === "unanswered"} value={state}/>
          {state.value === "unanswered" ? <QuizItem context={context} value={state}/> : (
          state.value === "correct" ? <CorrectAnswer context={context} value={state}/> : (
          state.value === "incorrect" ? <WrongAnswer context={context} value={state}/> : true))}
        </>
      )}
    </store.Consumer>
  );
}

export default Quiz;