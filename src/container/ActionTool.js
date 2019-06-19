import React from "react";
import selectIcon from "img/select.png";
import eraserIcon from "img/eraser.png";
import { ToolBox, ToolBoxLeft } from "component/Boxes";
import styled from "styled-components";
import { selectShape, getCoord, draw } from "redux/action/drawAction";
import { connect } from "react-redux";

const SelectIcon = styled.img`
  width: ${props => (props.width ? props.width : "25")}px;
  padding: ${props => (props.padding ? props.padding : "10")}px;
`;

const ActionTool = ({ selectShape }) => {
  return (
    <ToolBox>
      <ToolBoxLeft>
        <SelectIcon src={selectIcon} onClick={() => selectShape(null)} />
        <SelectIcon src={eraserIcon} width="29" padding="8" />
      </ToolBoxLeft>
    </ToolBox>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: () => dispatch(selectShape(null))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ActionTool);
