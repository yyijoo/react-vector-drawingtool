import * as c from "redux/constants";

const initialState = {
  fillColor: "pink",
  fillOpacity: "100%",
  strokeColor: "grey",
  strokeWidth: "1px",
  strokeOpacity: "100%"
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default editReducer;
