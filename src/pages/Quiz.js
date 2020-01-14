import React from "react";
import {store} from "../store/store";
import Header from "../components/header";
import QuizItem from "../components/quiz-item";


function Quiz() {

  return (
    <store.Consumer>
      {context => (
        <>
          <Header context={context}/>
          <QuizItem context={context}/>
        </>
      )}
    </store.Consumer>
  );
}

export default Quiz;
