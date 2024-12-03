import { isString } from "antd/es/button";
import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const ShopContext = ({ children }) => {
  const intialState = {
    data: JSON.parse(localStorage.getItem("shop")) || [],
  };
  const reducer = (state, { type, value, delete_id, product_id }) => {
    switch (type) {
      case "add":
        const findData = state?.data?.find((item) => item.id === value.id);

        if (findData) {
          state.data = state.data.map((item) =>
            item.id === value.id
              ? {
                  ...item,
                  count: item.count + 1,
                  userPrice: item.count * item.price_current,
                }
              : item
          );
        } else {
          state.data = [
            ...state.data,
            { ...value, count: 1, userPrice: value.price_current },
          ];
        }

        localStorage.setItem("shop", JSON.stringify(state.data));
        return { ...state };

      case "delete":
        state.data = state.data.filter((value) => value.id !== delete_id);
        localStorage.setItem("shop", JSON.stringify(state.data));
        return { ...state };
      case "increment":
        state.data = state.data.map((item) =>
          item.id === product_id
            ? {
                ...item,
                count: item.count + 1,
                userPrice: (item.count + 1) * item.price_current,
              }
            : item
        );
        localStorage.setItem("shop", JSON.stringify(state.data));

        return { ...state };
      case "decrement":
        state.data = state.data.map((item) =>
          item.id === product_id
            ? {
                ...item,
                count: item.count - 1,
                userPrice: (item.count - 1) * item.price_current,
              }
            : item
        );
        if (state.data.find((value) => value.count === 0)) {
          state.data = state.data.filter((value) => value.id !== product_id);
        }

        localStorage.setItem("shop", JSON.stringify(state.data));

        return { ...state };
      default:
        return { ...state, data: [] };
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext };
