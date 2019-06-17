import React from "react";
import { ToolBox } from "component/Boxes";
import ShapeIcon from "component/createShapeTool/ShapeIcon";

const CreateShapeTool = () => {
  return (
    <ToolBox>
      <ShapeIcon selectedShape="line" />
      <ShapeIcon selectedShape="square" />
    </ToolBox>
  );
};

export default CreateShapeTool;
