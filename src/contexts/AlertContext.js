import React, { createContext, useReducer } from "react";

import { SET_ALERT, REMOVE_ALERT } from "../types";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const reducer = (state, { payload, type }) => {
    let { admonition, message } = state;

    switch (type) {
      case SET_ALERT:
        return { ...state, ...payload };
      case REMOVE_ALERT:
        message = "";
        admonition = "";

        return { ...state, admonition, message };
      default:
        return state;
    }
  };

  const initialState = { message: "", admonition: "" };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlert = (admonition, message) => {
    let type = SET_ALERT;
    let payload = { message, admonition };

    dispatch({ type, payload });

    const duration = 3000;
    type = REMOVE_ALERT;

    setTimeout(() => dispatch({ type }), duration);
  };

  const { Provider } = AlertContext;
  const actions = { setAlert };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export default AlertProvider;
