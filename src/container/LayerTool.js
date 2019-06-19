import React from "react";
import { ToolBox, ToolBoxLeft, ToolBoxTitle, ToolItem } from "component/Boxes";
import styled from "styled-components";

const ToolItemLayer = styled(ToolItem)`
  background-color: transparent;
  border: 1px solid black;
`;

const LayerTool = () => {
  return (
    <ToolBox>
      <ToolBoxLeft>
        <ToolBoxTitle>Layers</ToolBoxTitle>
        <ToolItemLayer />
      </ToolBoxLeft>
    </ToolBox>
  );
};

export default LayerTool;
