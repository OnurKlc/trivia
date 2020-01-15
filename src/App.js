import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router} from "react-router-dom";
import {StateProvider} from "./store/store";
import Routes from "./routes/routes"
import ErrorBoundaries from "./components/error-boundaries";

const Outer = styled.div`
  background-color: #2980b9;
  height: 100vh;
`;

function App() {
  return (
    <Outer>
      <StateProvider
        value={{
          questionNo: 1,
          point: 0,
          data: []
        }}
      >
        <Router>
          <ErrorBoundaries>
            <Routes/>
          </ErrorBoundaries>
        </Router>
      </StateProvider>
    </Outer>

  );
}

export default App;
