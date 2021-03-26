import { ADD_PERSON, DELETE_PERSON, GET_PERSON, UPDATE_PERSON } from "./types";

// eslint-disable-next-line
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: state.persons.concat(payload),
      };
    case GET_PERSON:
      return {
        ...state,
        edit: true,
        dataByPerson: payload,
      };
    case UPDATE_PERSON:
      const updaListPersons = state.persons.map((el) => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });
      return {
        dataByPerson: payload,
        persons: updaListPersons,
      };

    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};
