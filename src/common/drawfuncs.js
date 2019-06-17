import React from "react";

// export const drawLine = (x1, y1, x2, y2) => {
//   this.props.coordinate.line = (
//     <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="orange" stroke-width="5" />
//   );
// };

export const drawSquare = (x1, y1, x2, y2) => {
  return (
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
