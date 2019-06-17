import React, { Component } from "react";
import { ToolBox, CanvasBox, Canvas } from "component/Boxes";
import { connect } from "react-redux";
import { selectShape, getCoord, draw } from "redux/action/drawAction";
import { drawLine, drawSquare } from "common/drawfuncs";

class CanvasArea extends Component {
  saveShape = () => {
    this.props.shapes.push(this.props.drawingShape);
  };
  shouldComponentUpdate = nextProps => {
    return nextProps.bottomRightCoord.x !== this.props.bottomRightCoord.x;
  };

  componentDidUpdate = () => {
    console.log("selectedShape", this.props.selectedShape);
    const { topLeftCoord, bottomRightCoord, selectedShape, draw } = this.props;
    if (selectedShape && topLeftCoord.x) {
      draw(
        drawSquare(
          topLeftCoord.x,
          topLeftCoord.y,
          bottomRightCoord.x,
          bottomRightCoord.y
        )
      );
    }
  };
  render() {
    // const { shapes, line } = this.props.coordinate;
    const { getCoord, selectShape, drawingShape, shapes } = this.props;

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
            this.saveShape();
            selectShape(null);
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
  return {
    topLeftCoord: state.drawReducer.coordinates.topLeftCoord,
    bottomRightCoord: state.drawReducer.coordinates.bottomRightCoord,
    selectedShape: state.drawReducer.selectedShape,
    drawingShape: state.drawReducer.drawingShape,
    shapes: state.drawReducer.layers[0]
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanvasArea);

// export default CanvasArea;
