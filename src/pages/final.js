import React, { useEffect, useState, useContext, useRef} from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
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

const Final = (props) => {



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