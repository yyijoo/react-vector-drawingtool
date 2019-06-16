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

class Test extends Component {
  drawLine = (x1, y1, x2, y2) => {
    this.props.coordinate.line = (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="orange" stroke-width="5" />
    );
  };

  saveLine = () => {
    this.props.coordinate.lines.push(this.props.coordinate.line);
    this.props.coordinate.line = null;
  };

  componentDidUpdate = () => {
    const { x1, y1, x2, y2, shapeIsSelected } = this.props.coordinate;
    if (shapeIsSelected) this.drawLine(x1, y1, x2, y2);
  };

  render() {
    const { lines, line } = this.props.coordinate;
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
          {lines ? lines.map(ele => ele) : ""}
          {line ? line : ""}
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
)(Test);
