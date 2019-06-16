import * as c from "redux/constants";
import React from "react";

const initialState = {
  coordinates: {
    topLeftCoord: {
      x: null,
      y: null
    },
    bottomRightCoord: {
      x: null,
      y: null
    }
  },
  selectedShape: null,
  drawingShape: null,
  Layers: [
    {
      id: 0,
      drawnShapes: []
    }
  ],
  x1: null,
  y1: null,
  x2: null,
  y2: null,
  shapes: [],
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
