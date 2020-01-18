import React, {useState, useContext} from "react";
import styled from "styled-components";
import axios from "axios";
import Lottie from "react-lottie";
import {useHistory} from "react-router-dom";
import {store, categoryArray} from "../store/store";

const animationData = require('../assets/291-searchask-loop.json');

const Outer = styled.div`
.lottie {
transform: translateX(-30px);
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
.wrapper {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #f7f1e3;
.select {
  margin-top: 30px;
}
p {
margin-top: 50px;
}
}
`;

const Button = styled.button`
  width: 200px;
  padding: 5px 0;
  margin-top: 80px;
  border-radius: 5px;
`;


function Welcome() {
  const [view, setView] = useState("start");
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  // const [width, setWidth] = useState();
  const history = useHistory();
  const globalState = useContext(store);
  const {dispatch, state} = globalState;

  if (view === "start" && state.data.length > 0) {
    dispatch({type: "resetState"})
  }

  let rate;
  const rateSetter = () => {
    if (window.innerWidth < 600) {
      rate = 200;
    } else {
      rate = 300;
    }
  };

  rateSetter();


  const difficultyHandler = e => {
    setDifficulty(e.target.value);
    setView("category");
  };

  let questionData;

  const textDecoder = (_questionData) => {
    _questionData.map(item => {
      const div = document.createElement('div');
      div.innerHTML = item.question;
      item.question = div.innerHTML;
      const div2 = document.createElement('div');
      div2.innerHTML = item.correct_answer;
      item.correct_answer = div2.innerHTML;
      for (let i = 0; i < item.incorrect_answers.length; i++) {
        const div3 = document.createElement('div');
        div3.innerHTML = item.incorrect_answers[i];
        item.incorrect_answers[i] = div3.innerHTML;
      }
    })
    questionData = _questionData;
  };

  const startQuiz = () => {
    axios({
      method: "get",
      url: "https://opentdb.com/api.php",
      params: {
        amount: 10,
        category: category,
        difficulty: difficulty
      }
    }).then(response => {
      dispatch({type: "resetState" });
      textDecoder(response.data.results);
      dispatch({type: "setData", questions: questionData});
      history.push("/quiz");
    });
  };

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
              width={rate}
              height={rate}
              isStopped={false}
              isPaused={false}
      />
      </div>
      {view === "start" && (
        <div className="wrapper">
          <p>A TRIVIA GAME</p>
          <Button onClick={() => setView("difficulty")}>GET STARTED</Button>
        </div>
      )}
      {view === "difficulty" && (
        <div className="wrapper">
          <p>Select Difficulty</p>
          <Button
            onClick={difficultyHandler}
            value="easy"
            style={{marginTop: "30px"}}
          >
            Easy
          </Button>
          <Button
            onClick={difficultyHandler}
            value="medium"
            style={{marginTop: "25px"}}
          >
            Medium
          </Button>
          <Button
            onClick={difficultyHandler}
            value="hard"
            style={{marginTop: "25px"}}
          >
            Hard
          </Button>
        </div>
      )}
      {view === "category" && (
        <div className="wrapper">
          <p>Select Category</p>
          <select className="select" onChange={e => setCategory(e.target.selectedIndex + 8)}>
            {categoryArray.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <Button onClick={startQuiz}>Start</Button>
        </div>
      )}
    </Outer>
  );
}

export default Welcome;
