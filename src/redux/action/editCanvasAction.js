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

export const editColorCanvas = selectedColor => {
  return {
    type: c.EDIT_COLOR_CANVAS,
    payload: selectedColor.hex
  };
};

export const editOpacCanvas = opacity => {
  return {
    type: c.EDIT_OPACITY_CANVAS,
    payload: opacity
  };
};
