import { combineReducers } from "redux";
import drawReducer from "redux/reducer/drawReducer";
import editReducer from "redux/reducer/editReducer";

const rootReducer = combineReducers({
  drawReducer,
  editReducer
});

export default rootReducer;
