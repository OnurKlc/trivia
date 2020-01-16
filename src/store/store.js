import React, { createContext, useReducer } from "react";

const initialState = {
  questionNo: 1,
  point: 0,
  data: [],
  countDown: true
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "incrementQuestion":
        return { ...state, questionNo: state.questionNo + 1 };
      case "point":
        return { ...state, point: action.point };
      case "setData":
        return { ...state, data: action.questions };
      case "countDown":
        return {...state, countDown: action.countDown};
      case "resetState":
        return {...initialState};
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

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

export { store, StateProvider, categoryArray };
