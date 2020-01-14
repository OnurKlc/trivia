import React, { useState, useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import {store} from "../store/store";
import Header from "../components/header";

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
  let data = useContext(store);

  return (
    <Outer>
      <store.Consumer>
        {context => (
          <>
            <Header context={context}/>
            <p>{context.state.data[context.state.questionNo - 1].question}</p>
          </>
        )}
      </store.Consumer>
    </Outer>
  );
}

export default Quiz;
