import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectShape, draw } from "redux/action/drawAction";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledSVG = styled.svg`
  border: 1px solid black;
  width: 500px;
  height: 500px;
`;

class EllipseCircleTest extends Component {
  drawCircle = (x1, y1, x2, y2) => {
    console.log(x1, y1);
    console.log("x", (x2 - x1) / 2, "y", (y2 - y1) / 2);
    this.props.coordinate.circle = (
      <ellipse
        cx={x1 + (x2 - x1) / 2}
        cy={y1 + (y2 - y1) / 2}
        rx={(x2 - x1) * 2}
        ry={(y2 - y1) * 2}
        fill="grey"
        stroke="orange"
        stroke-width="5"
      />
    );
  };

  saveLine = () => {
    this.props.coordinate.shapes.push(this.props.coordinate.circle);
    this.props.coordinate.circle = null;
  };

  componentDidUpdate = () => {
    const { x1, y1, x2, y2, shapeIsSelected } = this.props.coordinate;
    if (shapeIsSelected) this.drawCircle(x1, y1, x2, y2);
  };

  render() {
    const { shapes, line, circle } = this.props.coordinate;
    const { draw, selectShape } = this.props;

    return (
      <Container className="App">
        <StyledSVG
          onMouseDown={e => {
            selectShape();
            draw("start", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseMove={e => {
            draw("end", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseUp={() => {
            this.saveLine();
            selectShape();
          }}
        >
          {shapes ? shapes.map(ele => ele) : ""}
          {circle ? circle : ""}
        </StyledSVG>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    draw: (startOrEnd, x, y) => dispatch(draw(startOrEnd, x, y)),
    selectShape: () => dispatch(selectShape())
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
)(EllipseCircleTest);
