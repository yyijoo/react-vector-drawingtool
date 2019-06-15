import React, { Component } from "react";
import styled from "styled-components";

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
  state = {
    x1: null,
    x2: null,
    y1: null,
    y2: null,
    lines: []
  };

  drawLine = () => {
    this.state.lines.push(
      <line
        x1={this.state.x1}
        x2={this.state.x2}
        y1={this.state.y1}
        y2={this.state.y2}
        stroke="orange"
        stroke-width="5"
      />
    );
  };

  render() {
    return (
      <Container className="App">
        <StyledSVG
          onMouseDown={e =>
            this.setState({
              x1: e.nativeEvent.offsetX,
              y1: e.nativeEvent.offsetY
            })
          }
          onMouseUp={e => {
            this.state.lines.push(
              <line
                x1={this.state.x1}
                x2={e.nativeEvent.offsetX}
                y1={this.state.y1}
                y2={e.nativeEvent.offsetY}
                stroke="orange"
                stroke-width="5"
              />
            );
            this.setState({
              x1: null,
              x2: null,
              y1: null,
              y2: null
            });
          }}
        >
          {this.state.lines ? this.state.lines : ""}
        </StyledSVG>
      </Container>
    );
  }
}

export default Test;
