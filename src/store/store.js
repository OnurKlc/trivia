import React, { createContext, useReducer } from "react";

const initialState = {
  questionNo: 1,
  point: 0,
  data: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "incrementQuestion":
        return { ...state, questionNo: state.questionNo + 1 };
      case "incrementPoint":
        return { ...state, point: state.point + action.point };
      case "setData":
        return { ...state, data: action.questions };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
