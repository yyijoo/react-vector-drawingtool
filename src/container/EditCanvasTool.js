import React, { Component } from "react";
import { ToolBox } from "component/Boxes";
import { connect } from "react-redux";
import styled from "styled-components";
import { changeCanvasSize } from "redux/action/canvasEditAction";

const CanvasSizer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;

const CanvasSizerInput = styled.input`
  margin-top: 4px;
  background-color: #00b3b3;
  border: none;
  cursor: pointer;
  color: white;
  text-align: center;

  ::placeholder {
    color: white;
    text-align: center;
  }
`;

const CanvasSizerLabel = styled.p`
  color: white;
  text-decoration: none;
  position: absolute;
  margin-left: 20px;
  line-height: 0;
`;
//

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
    const { width, height } = this.props.canvasSet;
    return (
      <ToolBox>
        Edit Canvas Tool
        <CanvasSizer>
          <CanvasSizerLabel>Width</CanvasSizerLabel>
          <CanvasSizerInput
            placeholder={width}
            onChange={e => this.handleOnChange(e, "width")}
          />
        </CanvasSizer>
        <CanvasSizer>
          <CanvasSizerLabel>Height</CanvasSizerLabel>
          <CanvasSizerInput
            placeholder={height}
            onChange={e => this.handleOnChange(e, "height")}
          />
        </CanvasSizer>
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
    changeSize: (width, height) => dispatch(changeCanvasSize(width, height))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCanvasTool);
