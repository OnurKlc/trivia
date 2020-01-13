import React from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Context from "./context/context";

const Outer = styled.div`
  background-color: #2980b9;
  height: 100vh;
`;

function App() {
  return (
    <Context.Provider value={{
      questionNo: 1,
      point: 0,
      data: [],
      dispatch: (arg) => (this.data.push(arg))
    }}>
      <Router>
        <Outer>
          <Route exact path={"/"} component={Welcome}></Route>
          <Route exact path={"/quiz"} component={Quiz}></Route>
        </Outer>
      </Router>
    </Context.Provider>
  );
}

export default App;
