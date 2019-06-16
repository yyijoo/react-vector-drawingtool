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

export const CanvasBox = styled.div``;

export const Canvas = styled.div`
  background-color: ${colors.canvas};
`;
