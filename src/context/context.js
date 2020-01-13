import React from "react";

let store = React.createContext({
    questionNo: 1,
    point: 0,
    data: [],
    dispatch: (arg) => (store.data.push(arg))
});

export default store;