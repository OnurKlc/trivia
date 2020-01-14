import React, {useContext} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Outer = styled.div`
color: #4b4b4b;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
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
  .warning {
  margin-top: 30px;
  font-size: 24px;
  color: #f7f1e3;
  }
  .home-wrapper {
  color: white;
  a {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
  }
  .home {
  font-size: 60px;
  margin-top: 30px;
  }
`

const Timeout = () => {

  return (
    <Outer>
      <div className="middleware">
        <i className="fa fa-hourglass-end icon"></i>
        <div className="warning">Yeterli süre içinde cevap veremediniz:(</div>
        <div className="home-wrapper">
          <Link to={"/"}>
            <i className="fa fa-home home"></i>
            <p>Başa Dön</p>
          </Link>
        </div>
      </div>
    </Outer>
  )
};

export default Timeout;