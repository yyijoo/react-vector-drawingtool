import React, { Component } from "react";
import {
  ToolBox,
  ToolBoxTitles,
  ToolBoxLeft,
  ToolBoxTitle,
  ToolItem,
  ToolItemTitle,
  ToolItemValue,
  Item,
  Input
} from "component/Boxes";

import { connect } from "react-redux";
import styled from "styled-components";
import { BlockPicker } from "react-color";
import { editColorFill, editColorStroke } from "redux/action/editShapeAction";

class ColorOpacController extends Component {
  state = {
    showPicker: false
  };

  render() {
    const { showPicker } = this.state;
    const { color, opacity, editColor } = this.props;

    const ColorPickerButton = styled.span`
      display: inline-block;
      background-color: ${props => (props.color ? props.color : "")};
      width: 15px;
      height: 15px;
      border: 1px solid black;
      position: relative;
    `;

    const ColorPicker = ({ color, onChange }) => {
      const PickerBox = styled.div`
        position: absolute;
        top: 30px;
        left: -77px;
      `;

      return (
        <PickerBox>
          <BlockPicker color={color} onChange={onChange} />
        </PickerBox>
      );
    };
    return (
      <Item>
        <ColorPickerButton
          color={color}
          onClick={() => this.setState({ showPicker: !showPicker })}
        >
          {showPicker ? <ColorPicker color={color} onChange={editColor} /> : ""}
        </ColorPickerButton>
        <Input value={opacity} />
      </Item>
    );
  }
}

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
