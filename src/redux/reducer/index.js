import { combineReducers } from "redux";
import drawReducer from "redux/reducer/drawReducer";
import editReducer from "redux/reducer/editReducer";
import canvasReducer from "redux/reducer/canvasReducer";

const rootReducer = combineReducers({
  drawReducer,
  editReducer,
  canvasReducer
});

export default rootReducer;
