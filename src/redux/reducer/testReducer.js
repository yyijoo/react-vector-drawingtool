import * as c from "redux/constants";
import React from "react";

const initialState = {
  x1: null,
  y1: null,
  x2: null,
  y2: null,
  shapes: [
    <line x1={10} y1={10} x2={100} y2={100} stroke="red" stroke-width="3" />,
    <rect
      x={100}
      y={100}
      width={100}
      height={100}
      stroke="yellow"
      fill="green"
      stroke-width="1"
    />,
    <ellipse />
  ],
  line: [],
  rect: null,
  circle: null,
  shapeIsSelected: false
};

const drawReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SELECT_SHAPE:
      return {
        ...state,
        shapeIsSelected: !state.shapeIsSelected
      };
    case c.GET_COORD_START:
      return {
        ...state,
        x1: action.payload.x,
        y1: action.payload.y
        // shapeIsSelected: !state.shapeIsSelected
      };

    case c.GET_COORD_END:
      return {
        ...state,
        x2: action.payload.x,
        y2: action.payload.y
      };

    default:
      return state;
  }
};

export default drawReducer;
