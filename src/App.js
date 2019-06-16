import React, { Component } from "react";
import Test from "containers/Test.js";
import SquareTest from "containers/SquareTest.js";
import EllipseCircleTest from "containers/EllipseCircleTest.js";
import { Provider } from "react-redux";
import store from "redux/store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EllipseCircleTest />
        <SquareTest />
        <Test />
      </Provider>
    );
  }
}

export default App;
