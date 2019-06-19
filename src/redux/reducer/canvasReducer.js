import * as c from "redux/constants";

const initialState = {
  width: 500,
  height: 500,
  canvasColor: "white",
  canvasOpacity: "100"
};

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.CHANGE_CANVAS_SIZE:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height
      };

    case c.EDIT_COLOR_CANVAS:
      return {
        ...state,
        canvasColor: action.payload
      };

    case c.EDIT_OPACITY_CANVAS:
      return {
        ...state,
        canvasOpacity: action.payload
      };

    default:
      return state;
  }
};

export default canvasReducer;
