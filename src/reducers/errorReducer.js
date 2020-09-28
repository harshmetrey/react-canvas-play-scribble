import { GET_ERRORS, CLEAR_ERRORS } from "../constants";

const initialState = {
  errors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, errors: [...state.errors, action.paylaod]};

    case CLEAR_ERRORS:
      return {};

    default:
      return state;
  }
}
