import {
  FETCH_RECIPES_START,
  FETCH_RECIPES_COMPLETE,
  FETCH_RECIPES_ERROR,
} from "../actions/results";

const initialState = {
  isLoading: false,
  data: [],
  errors: {},
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_START:
      return { ...state, isLoading: true, data: [] };
    case FETCH_RECIPES_COMPLETE:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_RECIPES_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default resultReducer;
