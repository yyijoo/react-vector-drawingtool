import * as c from "redux/constants";

const initialState = {
  width: 500,
  height: 500
};

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.CHANGE_CANVAS_SIZE:
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height
      };
    default:
      return state;
  }
};

export default canvasReducer;
