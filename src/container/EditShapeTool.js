import React, { Component } from "react";
import { ToolBox } from "component/Boxes";
import { connect } from "react-redux";
import styled from "styled-components";
import { BlockPicker } from "react-color";
import { editColor } from "redux/action/editShapeAction";

const ColorDiv = styled.div`
  background-color: ${props => (props.color ? props.color : "")};
  width: 20px;
  height: 20px;
`;

const PickerBox = styled.div`
  background-color: white;
  .chrome-picker: {
    background-color: red;
  }
`;

const ColorPicker = ({ color, onChange }) => {
  return (
    <PickerBox>
      <BlockPicker color={color} onChange={onChange} />
    </PickerBox>
  );
};

class EditShapeTool extends Component {
  state = {
    showColorPicker: false
  };

  render() {
    const { editValues, editColor } = this.props;
    const { showColorPicker } = this.state;
    console.log(this.state, "state");
    return (
      <ToolBox>
        Edit Shape Tool
        <ColorDiv
          color={editValues.fillColor}
          onClick={() => this.setState({ showColorPicker: !showColorPicker })}
        />
        {showColorPicker ? (
          <ColorPicker color={editValues.fillColor} onChange={editColor} />
        ) : (
          ""
        )}
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
    editColor: selectedColor => dispatch(editColor(selectedColor))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShapeTool);
