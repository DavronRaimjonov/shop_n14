import { createContext, useReducer } from "react";

const LikeAppContext = createContext({});

const LikeContext = ({ children }) => {
  const inittalState = {
    like: JSON.parse(localStorage.getItem("like")) || [],
  };
  const reducer = (state, { type, value }) => {
    switch (type) {
      case "like_add":
        state.like = [...state.like, { ...value }];
        localStorage.setItem("like", JSON.stringify(state.like));
        return { ...state };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, inittalState);
  return (
    <LikeAppContext.Provider value={{ state, dispatch }}>
      {children}
    </LikeAppContext.Provider>
  );
};

export { LikeAppContext, LikeContext };
