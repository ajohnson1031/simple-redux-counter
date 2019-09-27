import { initialState } from "../stores";
import { ADD_ACTION, SUBTRACT_ACTION } from "../actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return { ...state, count: state.count + 1 };
    case SUBTRACT_ACTION:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
