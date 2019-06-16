import * as c from "redux/constants";

export const draw = (startOrEnd, x, y) => {
  if (startOrEnd === "start") {
    return {
      type: c.GET_COORD_START,
      payload: {
        x,
        y
      }
    };
  } else if (startOrEnd === "end") {
    return {
      type: c.GET_COORD_END,
      payload: {
        x,
        y
      }
    };
  }
};
