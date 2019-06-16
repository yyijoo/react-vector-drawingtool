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
  border: 1px solid red;
  width: 500px;
  height: 500px;
`;

class SquareTest extends Component {
  drawRect = (x1, y1, x2, y2) => {
    this.props.coordinate.rect = (
      <rect
        x={x1}
        y={y1}
        width={x2 - x1}
        height={y2 - y1}
        fill="pink"
        stroke-width="1"
      />
    );
  };

  saveRect = () => {
    this.props.coordinate.shapes.push(this.props.coordinate.rect);
    this.props.coordinate.rect = null;
  };

  componentDidUpdate = () => {
    const { x1, y1, x2, y2, shapeIsSelected } = this.props.coordinate;
    console.log(x2 - x1, y2 - y2);
    if (shapeIsSelected) this.drawRect(x1, y1, x2, y2);
  };

  render() {
    const { shapes, line, rect } = this.props.coordinate;
    const { draw, selectShape } = this.props;

    return (
      <Container className="App">
        <StyledSVG
          onMouseDown={e => {
            selectShape();
            draw("start", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseMove={e => {
            console.log("move");
            draw("end", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseUp={() => {
            this.saveRect();
            selectShape();
          }}
        >
          {shapes ? shapes.map(ele => ele) : ""}
          {/* {line ? line : ""} */}
          {rect ? rect : ""}
          <div>ddd</div>
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
)(SquareTest);
