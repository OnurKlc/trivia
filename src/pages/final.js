import React, { useContext} from "react";
import {useHistory} from "react-router";
import styled from "styled-components";
import Lottie from "react-lottie";
import { store } from "../store/store";
import BackHome from "../components/back-home";
const animationData = require('../assets/2837-trophy-animation.json');

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
.circle-wrapper {
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 50%;
text-align: center;
color: #f7f1e3;
}
`;

const Final = () => {
  const history = useHistory();
  const globalStore = useContext(store);
  const { state } = globalStore;

  if (state.questionNo !== 10) {
    history.push("/");
  }


  const defaultOptions = {
    loop: true,
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
      <div className="circle-wrapper">
        <p>Congratulations!</p>
        <p>You WON!</p>
        <BackHome/>
      </div>
    </Outer>
  )
};

export default Final;