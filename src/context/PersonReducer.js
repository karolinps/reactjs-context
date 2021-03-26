import { ADD_PERSON, DELETE_PERSON } from "./types";

export default (state, action) => {
  
  const { payload, type } = action;

  switch (type) {
    case ADD_PERSON:
      return {
        persons: state.persons.concat(payload),
      };
    case DELETE_PERSON:
      return {
        persons: state.persons.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};
