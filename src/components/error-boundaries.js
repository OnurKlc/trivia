import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import BackHome from "./back-home";

const animationData = require("../assets/4386-connection-error");

const Outer = styled.div`
.outer {
position: absolute;
left: 50%;
top: 40%;
transform: translateX(-50%);
color: #f7f1e3;
.error-text {
margin-top: 10px;
padding: 0;
text-align: center;
}
}
`;

class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  render() {
    if (this.state.error) {
      return (
        <Outer>
          <Lottie options={this.defaultOptions}
                  width={300}
                  height={300}
                  isStopped={false}
                  isPaused={false}
          />
          <div className="outer">
            <h1 className="error-text">Oops, something went wrong!</h1>
            <BackHome/>
          </div>
        </Outer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;