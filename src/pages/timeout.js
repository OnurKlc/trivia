import React, { useContext, useEffect } from "react";
import { useHistory} from "react-router";
import styled from "styled-components";
import Lottie from "react-lottie"
import {store} from "../store/store";
import BackHome from "../components/back-home";

const animationData = require('../assets/9986-time.json');

const Outer = styled.div`
.lottie {
position: relative;
.cover {
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 10;
background-color: transparent;
}
}
  .middleware {
  color: #4b4b4b;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .icon {
  font-size: 160px;
  }
  .warning {
  margin-top: 30px;
  font-size: 24px;
  color: #f7f1e3;
  }
`;

const Timeout = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const history = useHistory();

  if (!state.isTimeout) {
    history.push("/");
  }

  useEffect(() => {
    if (globalState.state.data.length > 1) {
      dispatch({ type: "setData", questions: []});
    }
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Outer>
      <div className="lottie">
      <div className="cover"></div>
      <Lottie options={defaultOptions}
              width={300}
              height={300}
              isStopped={false}
              isPaused={false}
      />
      </div>
      <div className="middleware">
        <div className="warning">Time is up!</div>
        <BackHome/>
      </div>
    </Outer>
  )
};

export default Timeout;