import React from "react";
import { ToolBox, ToolBoxLeft } from "component/Boxes";
import ShapeIcon from "component/createShapeTool/ShapeIcon";

const CreateShapeTool = () => {
  return (
    <ToolBox>
      <ToolBoxLeft>
        <ShapeIcon selectedShape="line" />
        <ShapeIcon selectedShape="square" />
        <ShapeIcon selectedShape="circle" />
        <ShapeIcon selectedShape="triangle" />
      </ToolBoxLeft>
    </ToolBox>
  );
};

export default CreateShapeTool;
