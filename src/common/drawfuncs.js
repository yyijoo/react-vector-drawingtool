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

  const width = x2 - x1;
  const height = y2 - y1;

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
          stroke-opacity={shapeAttr.strokeOpacity / 100}
        />
      );
    case "square":
      return (
        <rect
          x={x1}
          y={y1}
          width={width}
          height={height}
          fill={fillColor}
          stroke={strokeColor}
          stroke-width={strokeWidth}
          fill-opacity={shapeAttr.fillOpacity / 100}
          stroke-opacity={shapeAttr.strokeOpacity / 100}
        />
      );

    case "circle":
      return (
        <ellipse
          cx={x1 + width / 2}
          cy={y1 + height / 2}
          rx={width / 2}
          ry={height / 2}
          fill={fillColor}
          stroke={strokeColor}
          stroke-width={strokeWidth}
          fill-opacity={shapeAttr.fillOpacity / 100}
          stroke-opacity={shapeAttr.strokeOpacity / 100}
        />
      );

    case "triangle":
      return (
        <polygon
          points={`${x1 + width / 2} ${y1}, ${x2} ${y2}, ${x1} ${y2}`}
          fill={fillColor}
          stroke={strokeColor}
          stroke-width={strokeWidth}
          fill-opacity={shapeAttr.fillOpacity / 100}
          stroke-opacity={shapeAttr.strokeOpacity / 100}
        />
      );

    default:
      return <line />;
  }
};
