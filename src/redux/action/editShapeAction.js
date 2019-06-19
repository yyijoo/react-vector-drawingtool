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
