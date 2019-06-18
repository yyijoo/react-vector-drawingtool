import React from "react";
import { ToolBox } from "component/Boxes";
import selectIcon from "select.png";
import styled from "styled-components";
import { selectShape, getCoord, draw } from "redux/action/drawAction";
import { connect } from "react-redux";

const SelectIcon = styled.img`
  width: 30px;
  border: 1px yellow solid;
`;

const ActionTool = ({ selectShape }) => {
  return (
    <ToolBox>
      Action Tool
      <SelectIcon src={selectIcon} onClick={() => selectShape(null)} />
    </ToolBox>
  );
};

// const mapStateToProps = state => {
//   const {selectShape} = state.drawReducer
//   return {
//     selectShape:
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    selectShape: () => dispatch(selectShape(null))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ActionTool);
