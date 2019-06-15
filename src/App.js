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

class App extends Component {
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

export default App;

const sampleSVG = () => (
  <StyledSVG
    width="200"
    height="250"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="10"
      width="30"
      height="30"
      stroke="black"
      fill="transparent"
      stroke-width="5"
    />
    <rect
      x="60"
      y="10"
      rx="10"
      ry="10"
      width="30"
      height="30"
      stroke="black"
      fill="transparent"
      stroke-width="5"
    />

    <circle
      cx="25"
      cy="75"
      r="20"
      stroke="red"
      fill="transparent"
      stroke-width="5"
    />
    <ellipse
      cx="75"
      cy="75"
      rx="20"
      ry="5"
      stroke="red"
      fill="transparent"
      stroke-width="5"
    />
    <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5" />
    <polyline
      points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange"
      fill="transparent"
      stroke-width="5"
    />

    <polygon
      points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green"
      fill="transparent"
      stroke-width="5"
    />

    <path
      d="M20,230 Q40,205 50,230 T90,230"
      fill="none"
      stroke="blue"
      stroke-width="5"
    />
  </StyledSVG>
);
