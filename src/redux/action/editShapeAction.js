import * as c from "redux/constants";

export const editColorFill = selectedColor => {
  return {
    type: c.EDIT_COLOR_FILL,
    payload: selectedColor.hex
  };
};

export const editColorStroke = selectedColor => {
  return {
    type: c.EDIT_COLOR_STROKE,
    payload: selectedColor.hex
  };
};

export const editOpacFill = opacity => {
  return {
    type: c.EDIT_OPACITY_FILL,
    payload: opacity
  };
};

export const editOpacStroke = opacity => {
  return {
    type: c.EDIT_OPACITY_STROKE,
    payload: opacity
  };
};
