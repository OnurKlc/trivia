import React from "react";
import Welcome from "./pages/Welcome";
import Quiz from "./pages/Quiz";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {store, StateProvider} from "./store/store";

const Outer = styled.div`
  background-color: #2980b9;
  height: 100vh;
`;

function App() {
  return (
    <StateProvider
      value={{
        questionNo: 1,
        point: 0,
        data: []
      }}
    >
      <Router>
        <Outer>
          <Route exact path={"/"} component={Welcome}></Route>
          <Route exact path={"/quiz"} component={Quiz}></Route>
        </Outer>
      </Router>
    </StateProvider>
  );
}

export default App;
