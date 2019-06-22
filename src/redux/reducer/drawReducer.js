import * as c from "redux/constants";

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
      // {
      //   id: 0,
      //   ele: (
      //     <line
      //       x1={10}
      //       y1={10}
      //       x2={100}
      //       y2={100}
      //       stroke="gray"
      //       stroke-width="2"
      //     />
      //   )
      // }
    ]
  },
  selectedShapeId: null
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
        ...state,
        drawingShape: null,
        layers: {
          0: action.payload
        }
      };

    default:
      return state;
  }
};

export default drawReducer;
