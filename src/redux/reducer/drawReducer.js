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
  shapeIsSelected: false,
  selectedShape: null,
  drawingShape: null,
  Layers: [
    {
      id: 0,
      drawnShapes: []
    }
  ],
  shapes: [],
  line: [],
  rect: null,
  circle: null
};

const drawReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SELECT_SHAPE:
      return {
        ...state,
        selectedShape: action.payload
      };
    case c.GET_COORD_START:
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          topLeftCoord: {
            x: action.payload.x,
            y: action.payload.y
          }
        }
      };

    case c.GET_COORD_END:
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          bottomRightCoord: {
            x: action.payload.x,
            y: action.payload.y
          }
        }
      };

    default:
      return state;
  }
};

export default drawReducer;
