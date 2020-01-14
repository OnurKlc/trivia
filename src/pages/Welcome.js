import React, { useState, useContext, useReducer } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { store } from "../store/store";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 40px;
    width: 320px;
    height: 200px;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 5px 0;
  position: absolute;
  top: 70%;
`;

const categoryArray = [
  "Any Category",
  "General Knowledge",
  "Entertainment: Books",
  "Entertainment: Film",
  "Entertainment: Music",
  "Entertainment: Musicals & Theatres",
  "Entertainment: Television",
  "Entertainment: Video Games",
  "Entertainment: Board Games",
  "Science & Nature",
  "Science: Computers",
  "Science: Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Entertainment: Comics",
  "Science: Gadgets",
  "Entertainment: Japanese Anime & Manga",
  "Entertainment: Cartoon & Animations"
];

function Welcome() {
  const [view, setView] = useState("start");
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  const history = useHistory();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const difficultyHandler = e => {
    setDifficulty(e.target.value);
    setView("category");
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
      dispatch({ type: "setData", questions: response.data.results });
      history.push("/quiz");
    });
  };

  return (
    <Wrapper>
      <img src={require("../assets/quiz.png")} alt="quiz" />
      {view === "start" && (
        <>
          <p>A TRIVIA GAME</p>
          <Button onClick={() => setView("difficulty")}>GET STARTED</Button>
        </>
      )}
      {view === "difficulty" && (
        <>
          <p>Select Difficulty</p>
          <Button
            onClick={difficultyHandler}
            value="easy"
            style={{ top: "50%" }}
          >
            Easy
          </Button>
          <Button
            onClick={difficultyHandler}
            value="medium"
            style={{ top: "60%" }}
          >
            Medium
          </Button>
          <Button
            onClick={difficultyHandler}
            value="hard"
            style={{ top: "70%" }}
          >
            Hard
          </Button>
        </>
      )}
      {view === "category" && (
        <>
          <p>Select Category</p>
          <select onChange={e => setCategory(e.target.selectedIndex + 8)}>
            {categoryArray.map((item, index) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <Button onClick={startQuiz}>Start</Button>
        </>
      )}
    </Wrapper>
  );
}

export default Welcome;
