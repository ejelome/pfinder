import React, { createContext, useReducer } from "react";

import { SET_ALERT, REMOVE_ALERT } from "../types/alertTypes";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const reducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case SET_ALERT:
        return payload;
      case REMOVE_ALERT:
        return {};
      default:
        return state;
    }
  };

  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });

    const duration = 3000;

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), duration);
  };

  const { Provider } = AlertContext;

  return <Provider value={{ alert: state, setAlert }}>{children}</Provider>;
};

export default AlertProvider;
