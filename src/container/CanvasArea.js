import React, { Component } from "react";
import { ToolBox, CanvasBox, Canvas } from "components/Boxes";
import { connect } from "react-redux";
import { selectShape, draw } from "redux/action/drawAction";

class CanvasArea extends Component {
  drawLine = (x1, y1, x2, y2) => {
    this.props.coordinate.line = (
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="orange" stroke-width="5" />
    );
  };

  saveLine = () => {
    this.props.coordinate.shapes.push(this.props.coordinate.line);
    this.props.coordinate.line = null;
  };

  componentDidUpdate = () => {
    const { x1, y1, x2, y2, shapeIsSelected } = this.props.coordinate;
    if (shapeIsSelected) this.drawLine(x1, y1, x2, y2);
  };
  render() {
    const { shapes, line } = this.props.coordinate;
    const { draw, selectShape } = this.props;

    return (
      <CanvasBox>
        CanvasArea
        <Canvas
          onMouseDown={e => {
            draw("start", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseMove={e => {
            draw("end", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseUp={() => {
            this.saveLine();
            selectShape(null);
          }}
        >
          canvas
        </Canvas>
      </CanvasBox>
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
)(CanvasArea);

// export default CanvasArea;
