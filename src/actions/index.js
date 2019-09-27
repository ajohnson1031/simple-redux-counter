export const ADD_ACTION = "ADD_ACTION";
export const SUBTRACT_ACTION = "SUBTRACT_ACTION";

export const addAction = state => ({ type: ADD_ACTION, payload: state });
export const subtractAction = state => ({
  type: SUBTRACT_ACTION,
  payload: state
});
