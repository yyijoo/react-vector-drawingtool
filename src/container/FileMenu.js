import React from "react";
import { FileMenuBox } from "component/Boxes";
import styled from "styled-components";
import * as colors from "common/colors";

const Menu = styled.span`
  color: ${colors.menu};
  margin-left: 1rem;
`;

const FileMenu = () => {
  return (
    <FileMenuBox>
      <Menu>new file</Menu>
      <Menu>save file</Menu>
    </FileMenuBox>
  );
};

export default FileMenu;
