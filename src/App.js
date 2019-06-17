import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "redux/store.js";
// import FileMenu from "containers/fileMe";
import FileMenu from "container/FileMenu.js";
import CreateShapeTool from "container/CreateShapeTool.js";
import EditShapeTool from "container/EditShapeTool.js";
import EditCanvasTool from "container/EditCanvasTool.js";
import ActionTool from "container/ActionTool.js";
import LayerTool from "container/LayerTool.js";
import CanvasArea from "container/CanvasArea.js";
import {
  Container,
  LeftContainer,
  MiddleContainer,
  RightContainer
} from "component/Layouts";
import "normalize.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <FileMenu />
          <LeftContainer>
            <CreateShapeTool />
            <ActionTool />
          </LeftContainer>
          <MiddleContainer>
            <CanvasArea />
          </MiddleContainer>
          <RightContainer>
            <EditCanvasTool />
            <EditShapeTool />
            <LayerTool />
          </RightContainer>
        </Container>
      </Provider>
    );
  }
}

export default App;
