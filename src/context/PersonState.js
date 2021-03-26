import React, { useReducer } from "react";

import PersonContext from "./PersonContext";
import PersonReducer from "./PersonReducer";

import { ADD_PERSON, DELETE_PERSON, GET_PERSON, UPDATE_PERSON } from "./types";

const PersonState = (props) => {
  const initialState = {
    persons: [
      {
        id: "098",
        name: "Karolin Porras",
        email: "karolin@email.com",
      },
    ],
    dataByPerson: { id: "", name: "", email: "" },
    edit: false,
  };

  const [state, dispatch] = useReducer(PersonReducer, initialState);

  const deletePerson = (id) => {
    dispatch({
      type: DELETE_PERSON,
      payload: id,
    });
  };

  const addPerson = (name, email) => {
    dispatch({
      type: ADD_PERSON,
      payload: { id: Math.random(), name: name, email: email },
    });
  };

  const getByPerson = (dataPerson) => {
    dispatch({
      type: GET_PERSON,
      payload: dataPerson,
    });
  };

  const updatePerson = (name, email) => {
    dispatch({
      type: UPDATE_PERSON,
      payload: { id: state.dataByPerson.id, name: name, email: email },
    });
  };

  return (
    <PersonContext.Provider
      value={{
        persons: state.persons,
        dataByPerson: state.dataByPerson,
        edit: state.edit,
        deletePerson,
        addPerson,
        getByPerson,
        updatePerson,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
