import * as c from "redux/constants";
import React from "react";

const initialState = {
  x1: null,
  y1: null,
  x2: null,
  y2: null,
  lines: [
    <line x1={10} y1={10} x2={100} y2={100} stroke="red" stroke-width="3" />
  ],
  line: [],
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
