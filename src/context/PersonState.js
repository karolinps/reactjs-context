import React, { useReducer } from "react";

import PersonContext from "./PersonContext";
import PersonReducer from "./PersonReducer";

import { ADD_PERSON, DELETE_PERSON } from "./types";

const PersonState = (props) => {
  const initialState = {
    persons: [
      {
        id: "098",
        name: "Karolin Porras",
        email: "karolin@email.com",
      },
    ],
  };

  const [state, dispatch] = useReducer(PersonReducer, initialState);
  const deleteItem = (id) => {
    dispatch({
      type: DELETE_PERSON,
      payload: id,
    });
  };

  const addteItem = (name, email) => {
    dispatch({
      type: ADD_PERSON,
      payload: { id: Math.random(), name: name, email: email },
    });
  };

  return (
    <PersonContext.Provider
      value={{
        persons: state.persons,
        deleteItem,
        addteItem,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
