import React, { useContext} from "react";
import {useHistory} from "react-router";
import styled from "styled-components";
import Lottie from "react-lottie";
import { store } from "../store/store";
import BackHome from "../components/back-home";
const animationData = require('../assets/2837-trophy-animation.json');

const Outer = styled.div`
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
      <Lottie options={defaultOptions}
              width={300}
              height={300}
              isStopped={false}
              isPaused={false}
      />
      <div className="circle-wrapper">
        <p>Congratulations!</p>
        <p>You WON!</p>
        <BackHome/>
      </div>
    </Outer>
  )
};

export default Final;