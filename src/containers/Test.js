import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { draw } from "redux/action/drawAction";

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

class Test extends Component {
  drawLine = (x1, y1, x2, y2) => {
    console.log("mouseUp");
    this.props.coordinate.line = (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="orange" stroke-width="5" />
    );
  };

  saveLine = () => {
    this.props.coordinate.lines.push(this.props.coordinate.line);
    this.props.coordinate.line = null;
  };

  componentDidUpdate = () => {
    const { x1, y1, x2, y2, lines, shapeIsSelected } = this.props.coordinate;
    if (shapeIsSelected) this.drawLine(x1, y1, x2, y2);
  };

  renderLines = () => {
    const { x1, y1, x2, y2, lines, shapeIsSelected } = this.props.coordinate;

    return lines;
  };

  render() {
    const { lines, line } = this.props.coordinate;
    console.log("lines", lines);
    return (
      <Container className="App">
        <StyledSVG
          onMouseDown={e =>
            this.props.draw(
              "start",
              e.nativeEvent.offsetX,
              e.nativeEvent.offsetY
            )
          }
          onMouseMove={e => {
            this.props.draw(
              "end",
              e.nativeEvent.offsetX,
              e.nativeEvent.offsetY
            );
            console.log("moving");
          }}
          onMouseUp={() => this.saveLine()}
        >
          {lines ? lines : ""}
          {line ? line : ""}
        </StyledSVG>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    draw: (startOrEnd, x, y) => dispatch(draw(startOrEnd, x, y))
  };
};

const mapStateToProps = state => {
  return {
    coordinate: state.drawReducer
    // startDraw
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
