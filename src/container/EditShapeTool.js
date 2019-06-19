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
import ColorOpacController from "component/ColorOpacController";

import { connect } from "react-redux";

import { editColorFill, editColorStroke } from "redux/action/editShapeAction";

class EditShapeTool extends Component {
  render() {
    const { editValues, editColorFill, editColorStroke } = this.props;
    return (
      <ToolBox>
        <ToolBoxLeft>
          <ToolBoxTitle>Shape Design</ToolBoxTitle>
          <ToolItem>
            <ToolItemTitle>Fill</ToolItemTitle>
            <ToolItemValue>
              <ColorOpacController
                color={editValues.fillColor}
                opacity={editValues.fillOpacity}
                editColor={editColorFill}
              />
            </ToolItemValue>
          </ToolItem>
          <ToolItem>
            <ToolItemTitle>Stroke</ToolItemTitle>
            <ToolItemValue>
              <ColorOpacController
                color={editValues.strokeColor}
                opacity={editValues.strokeOpacity}
                editColor={editColorStroke}
              />
              <Input value={editValues.strokeWidth} width="100" />
            </ToolItemValue>
          </ToolItem>
        </ToolBoxLeft>
      </ToolBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    editValues: state.editReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editColorFill: selectedColor => dispatch(editColorFill(selectedColor)),
    editColorStroke: selectedColor => dispatch(editColorStroke(selectedColor))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShapeTool);
