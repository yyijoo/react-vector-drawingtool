import * as c from "redux/constants";

export const editColor = selectedColor => {
  return {
    type: c.EDIT_COLOR,
    payload: selectedColor.hex
  };
};
