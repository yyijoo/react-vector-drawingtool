import * as c from "redux/constants";

export const changeCanvasSize = (width, height) => {
  return {
    type: c.CHANGE_CANVAS_SIZE,
    payload: {
      width,
      height
    }
  };
};
