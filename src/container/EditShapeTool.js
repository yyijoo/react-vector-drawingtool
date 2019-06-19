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
import {
  editColorFill,
  editColorStroke,
  editOpacFill,
  editOpacStroke,
  editStroke
} from "redux/action/editShapeAction";

class EditShapeTool extends Component {
  handleOnChange = e => {
    this.props.editStroke(Number(e.target.value));
  };
  render() {
    const {
      editValues,
      editColorFill,
      editColorStroke,
      editOpacFill,
      editOpacStroke
    } = this.props;
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
                inputChanger={editOpacFill}
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
                inputChanger={editOpacStroke}
              />
              <Input
                value={editValues.strokeWidth}
                width="100"
                onChange={e => this.handleOnChange(e)}
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
    editValues: state.editReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editColorFill: selectedColor => dispatch(editColorFill(selectedColor)),
    editColorStroke: selectedColor => dispatch(editColorStroke(selectedColor)),
    editOpacFill: opacity => dispatch(editOpacFill(opacity)),
    editOpacStroke: opacity => dispatch(editOpacStroke(opacity)),
    editStroke: width => dispatch(editStroke(width))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShapeTool);
