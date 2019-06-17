import React from "react";

export const drawShape = (
  shapeType,
  topLeftCoord,
  bottomRightCoord,
  shapeAttr
) => {
  const x1 = topLeftCoord.x;
  const y1 = topLeftCoord.y;
  const x2 = bottomRightCoord.x;
  const y2 = bottomRightCoord.y;
  const {
    fillColor,
    fillOpacity,
    strokeColor,
    strokeWidth,
    strokeOpacity
  } = shapeAttr;
  switch (shapeType) {
    case "line":
      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={strokeColor}
          stroke-width={shapeAttr.strokeWidth}
        />
      );
    case "square":
      return (
        <rect
          x={x1}
          y={y1}
          width={x2 - x1}
          height={y2 - y1}
          fill={fillColor}
          stroke={strokeColor}
          stroke-width={strokeWidth}
        />
      );

    default:
      return <line />;
  }
};
