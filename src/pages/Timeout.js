import React, {useContext} from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30%;
  .middleware {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  .icon {
  font-size: 160px;
  }
`

const Timeout = () => {

  return (
    <Outer>
      <div className="middleware">
      <i className="fa fa-hourglass-end icon"></i>
      <div>Yeterli süre içinde cevap vermediniz:(</div>
      </div>
    </Outer>
  )
};

export default Timeout;