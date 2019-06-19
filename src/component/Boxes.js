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
  margin: 15px;
  padding: 10px;
`;

export const ToolBoxLeft = styled.div`
  margin: auto
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ToolBoxTitle = styled.div`
  color: white;
  text-decoration: none;
  padding-left: 20px;
  padding-top: 2px;
  font-size: 0.8em;
  line-height: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CanvasBox = styled.div`
  height: 100%;
`;

export const Canvas = styled.svg`
  display: block;
  background-color: ${colors.canvas};
  width: ${props => (props.width ? `${props.width}px` : "600px")};
  height: ${props => (props.height ? `${props.height}px` : "600px")};
  margin: auto;
`;

export const ToolBoxTitles = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 10px 0px 0px 15px;
`;
