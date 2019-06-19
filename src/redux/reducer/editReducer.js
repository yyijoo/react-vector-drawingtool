import * as c from "redux/constants";

const initialState = {
  fillColor: "yellow",
  fillOpacity: "100",
  strokeColor: "grey",
  strokeWidth: "1",
  strokeOpacity: "100"
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.EDIT_COLOR_STROKE:
      return {
        ...state,
        strokeColor: action.payload
      };
    case c.EDIT_COLOR_FILL:
      return {
        ...state,
        fillColor: action.payload
      };
    default:
      return state;
  }
};

export default editReducer;
