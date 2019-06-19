import React, { Component } from "react";
import { Item, Input } from "component/Boxes";
import styled from "styled-components";
import { BlockPicker } from "react-color";

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

export default ColorOpacController;
