import styled from "styled-components";
import * as colors from "common/colors";

export const Box = styled.div`
  background-color: ${colors.toolBox};
`;

export const FileMenuBox = styled(Box)`
  height: 45px;
  width: 100%;
`;

export const ToolBox = styled(Box)`
  height: 150px;
  margin: 10px;
`;

export const CanvasBox = styled.div`
  overflow: scroll;
  height: 100%;
`;

export const Canvas = styled.svg`
  display: block;
  background-color: ${colors.canvas};
  width: 80%;
  height: 80%;
  margin: auto;
`;
