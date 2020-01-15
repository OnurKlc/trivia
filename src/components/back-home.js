import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { createBrowserHistory } from 'history'


const Outer = styled.div`
  .home-wrapper {
  color: #f7f1e3;
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
`;

const BackHome = () => {
  const history = createBrowserHistory();

  const goHome = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <Outer>
      <div className="home-wrapper" onClick={goHome}>
        <Link to={"/"}>
          <i className="fa fa-home home"></i>
          <p>Back Home</p>
        </Link>
      </div>
    </Outer>
  )
};

export default BackHome;