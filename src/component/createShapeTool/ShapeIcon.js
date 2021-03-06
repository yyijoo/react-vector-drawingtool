import React from "react";
import styled from "styled-components";
import * as colors from "common/colors";
import { selectShape } from "redux/action/drawAction";
import { connect } from "react-redux";

const iconSize = 25;

const IconSVG = styled.svg`
  width: ${iconSize}px;
  height: ${iconSize}px;
  padding: 10px;
`;

const shapes = {
  line: {
    name: "line",
    icon: (
      <line x1="0" y1={iconSize} x2={iconSize} y2="0" stroke={colors.icon} />
    )
  },
  square: {
    name: "square",
    icon: (
      <rect x="0" y="0" width={iconSize} height={iconSize} fill={colors.icon} />
    )
  },
  circle: {
    name: "circle",
    icon: (
      <circle
        cx={iconSize / 2}
        cy={iconSize / 2}
        r={iconSize / 2}
        fill={colors.icon}
      />
    )
  },
  triangle: {
    name: "triangle",
    icon: (
      <polygon
        points={`${iconSize / 2} 0, ${iconSize} ${iconSize}, 0 ${iconSize}`}
        fill={colors.icon}
      />
    )
  }
};

const ShapeIcon = ({ selectedShape, selectShape }) => {
  const shape = shapes[selectedShape].icon;

  return (
    <IconSVG
      onClick={() => {
        selectShape(selectedShape);
      }}
    >
      {shape}
    </IconSVG>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectShape: selectedShape => dispatch(selectShape(selectedShape))
  };
};

const mapStateToProps = state => {
  return {
    coordinate: state.drawReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShapeIcon);
