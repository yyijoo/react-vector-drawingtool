import * as c from "redux/constants";

export const selectShape = selectedShape => {
  return {
    type: c.SELECT_SHAPE,
    payload: selectedShape
  };
};

export const getCoord = (startOrEnd, x, y) => {
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

export const draw = drawingShape => {
  console.log(drawingShape);
  return {
    type: c.DRAWING,
    payload: drawingShape
  };
};

export const completeDrawing = newShapes => {
  return {
    type: c.COMPLETE_DRAWING,
    payload: newShapes
  };
};
