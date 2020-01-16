import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie"
import {store} from "../store/store";
import BackHome from "../components/back-home";

const animationData = require('../assets/9986-time.json');

const Outer = styled.div`
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
  const { dispatch } = globalState;

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
      <Lottie options={defaultOptions}
              width={300}
              height={300}
              isStopped={false}
              isPaused={false}
      />
      <div className="middleware">
        <div className="warning">Your time has expired!</div>
        <BackHome/>
      </div>
    </Outer>
  )
};

export default Timeout;