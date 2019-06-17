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
  layers: {
    0: [
      <line x1={10} y1={10} x2={100} y2={100} stroke="red" stroke-width="3" />
    ]
  }
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

    case c.DRAWING:
      return {
        ...state,
        drawingShape: action.payload
      };

    case c.COMPLETE_DRAWING:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default drawReducer;
