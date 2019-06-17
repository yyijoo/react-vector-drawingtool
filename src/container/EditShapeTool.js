import React from "react";
import { ToolBox } from "component/Boxes";
import { connect } from "react-redux";
import styled from "styled-components";

const ColorDiv = styled.div`
  background-color: ${props => (props.color ? props.color : "")};
  width: 20px;
  height: 20px;
`;

const EditShapeTool = ({ editValues }) => {
  return (
    <ToolBox>
      Edit Shape Tool
      <ColorDiv color={editValues.fillColor} />
    </ToolBox>
  );
};

const mapStateToProps = state => {
  return {
    editValues: state.editReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(EditShapeTool);
