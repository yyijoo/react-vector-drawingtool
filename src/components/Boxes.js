import styled from "styled-components";

const colors = {
  toolbox: "#5D5D5D"
};

export const Box = styled.div`
  background-color: ${colors.toolbox};
`;

export const FileMenuBox = styled(Box)`
  height: 45px;
  width: 100%;
`;

export const ToolBox = styled(Box)`
  height: 150px;
  margin: 10px;
`;
