import React, { Component } from "react";
import { ToolBox, CanvasBox, Canvas } from "component/Boxes";
import { connect } from "react-redux";
import { selectShape, getCoord, draw } from "redux/action/drawAction";
import { drawShape } from "common/drawfuncs";

class CanvasArea extends Component {
  completeDrawing = () => {
    const { shapes, getCoord } = this.props;
    shapes.push(this.props.drawingShape);
    getCoord("start", null, null);
    getCoord("end", null, null);
  };

  shouldComponentUpdate = nextProps => {
    return nextProps.bottomRightCoord.x !== this.props.bottomRightCoord.x;
  };

  componentDidUpdate = () => {
    const {
      topLeftCoord,
      bottomRightCoord,
      selectedShape,
      draw,
      shapeAttr
    } = this.props;
    if (selectedShape && topLeftCoord.x) {
      draw(drawShape(selectedShape, topLeftCoord, bottomRightCoord, shapeAttr));
    }
  };
  render() {
    const { getCoord, drawingShape, shapes } = this.props;

    return (
      <CanvasBox>
        CanvasArea
        <Canvas
          onMouseDown={e => {
            getCoord("start", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseMove={e => {
            getCoord("end", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseUp={() => {
            this.completeDrawing();
          }}
        >
          {drawingShape ? drawingShape : ""}
          {shapes ? shapes.map(ele => ele) : ""}
        </Canvas>
      </CanvasBox>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoord: (startOrEnd, x, y) => dispatch(getCoord(startOrEnd, x, y)),
    draw: drawnShape => dispatch(draw(drawnShape)),
    selectShape: () => dispatch(selectShape())
  };
};

const mapStateToProps = state => {
  const {
    coordinates,
    selectedShape,
    drawingShape,
    layers
  } = state.drawReducer;
  return {
    topLeftCoord: coordinates.topLeftCoord,
    bottomRightCoord: coordinates.bottomRightCoord,
    selectedShape: selectedShape,
    drawingShape: drawingShape,
    shapes: layers[0],
    shapeAttr: state.editReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasArea);
