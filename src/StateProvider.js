// Import: Dependencies
import React, { createContext, useContext, useReducer } from "react";

// StateContext for React Context API
export const StateContext = createContext();

// StateProvider (Data Layer)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// useStateValue allows extraction of properties from StateProvider
export const useStateValue = () => useContext(StateContext);
