import React, { Component } from "react";
import { ToolBox, CanvasBox, Canvas } from "component/Boxes";
import { connect } from "react-redux";
import {
  selectShape,
  getCoord,
  draw,
  completeDrawing
} from "redux/action/drawAction";
import { drawShape } from "common/drawfuncs";

class CanvasArea extends Component {
  handleOnMouseUp = () => {
    const { shapes, getCoord, completeDrawing } = this.props;
    shapes.push(this.props.drawingShape);
    getCoord("start", null, null);
    getCoord("end", null, null);
    completeDrawing();
  };

  shouldComponentUpdate = nextProps => {
    if (nextProps.bottomRightCoord.x !== this.props.bottomRightCoord.x) {
      return true;
    } else if (
      nextProps.canvasSet.width !== this.props.canvasSet.width ||
      nextProps.canvasSet.height !== this.props.canvasSet.height
    )
      return true;
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
    const { width, height } = this.props.canvasSet;

    return (
      <CanvasBox>
        CanvasArea
        <Canvas
          width={width}
          height={height}
          onMouseDown={e => {
            getCoord("start", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseMove={e => {
            getCoord("end", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          onMouseUp={() => {
            this.handleOnMouseUp();
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
    selectShape: () => dispatch(selectShape()),
    completeDrawing: () => dispatch(completeDrawing())
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
    shapeAttr: state.editReducer,
    canvasSet: state.canvasReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasArea);
