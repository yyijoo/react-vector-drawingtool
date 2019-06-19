import React, { Component } from "react";
import {
  ToolBox,
  ToolBoxLeft,
  ToolBoxTitle,
  ToolItem,
  ToolItemTitle,
  ToolItemValue,
  Input
} from "component/Boxes";
import { connect } from "react-redux";
import ColorOpacController from "component/ColorOpacController";
import {
  changeCanvasSize,
  editColorCanvas,
  editOpacCanvas
} from "redux/action/editCanvasAction";

class EditCanvasTool extends Component {
  handleOnChange = (e, widthOrHeight) => {
    if (widthOrHeight === "width") {
      this.props.changeSize(
        Number(e.target.value),
        this.props.canvasSet.height
      );
    } else if (widthOrHeight === "height") {
      this.props.changeSize(this.props.canvasSet.width, Number(e.target.value));
    }
  };

  render() {
    const { width, height, canvasColor, canvasOpacity } = this.props.canvasSet;
    const { changeColor, changeOpacity } = this.props;
    return (
      <ToolBox>
        <ToolBoxLeft>
          <ToolBoxTitle>Canvas</ToolBoxTitle>
          <ToolItem>
            <ToolItemTitle>Width</ToolItemTitle>
            <Input
              value={width}
              onChange={e => this.handleOnChange(e, "width")}
            />
          </ToolItem>
          <ToolItem>
            <ToolItemTitle>Height</ToolItemTitle>
            <Input
              value={height}
              onChange={e => this.handleOnChange(e, "height")}
            />
          </ToolItem>
          <ToolItem>
            <ToolItemTitle>Color</ToolItemTitle>
            <ToolItemValue>
              <ColorOpacController
                color={canvasColor}
                opacity={canvasOpacity}
                editColor={changeColor}
                inputChanger={changeOpacity}
              />
            </ToolItemValue>
          </ToolItem>
        </ToolBoxLeft>
      </ToolBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    canvasSet: state.canvasReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSize: (width, height) => dispatch(changeCanvasSize(width, height)),
    changeColor: color => dispatch(editColorCanvas(color)),
    changeOpacity: opacity => dispatch(editOpacCanvas(opacity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCanvasTool);
