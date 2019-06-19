import styled from "styled-components";
import * as colors from "common/colors";

export const Box = styled.div`
  background-color: ${colors.toolBox};
`;

export const FileMenuBox = styled(Box)`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ToolBox = styled(Box)`
  margin: 15px;
  padding: 15px;
`;

export const ToolBoxLeft = styled.div`
  margin: auto
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

export const ToolBoxTitle = styled.div`
  color: ${colors.toolBoxTitle};
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 5px;
`;

export const ToolItem = styled.div`
  display: flex;
  background-color: ${colors.inputBox};
  width: 150px;
  min-height: 30px;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  border: white 1px solid;

  :last-child {
    margin-bottom: 0;
  }
`;
export const ToolItemTitle = styled.span`
  font-size: 0.7em;
  width: 30%;
  padding: 5px;
  text-align: center;
`;

export const ToolItemValue = styled.span`
  width: 70%;
  display: flex;
  flex-direction: column;
  border: white 1px solid;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  width: ${props => (props.width ? props.width : 70)}%;
  cursor: pointer;
  color: ${colors.inputText};
  text-align: center;
`;

export const CanvasBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: scroll;
`;

export const Canvas = styled.svg`
  display: inline-block;
  background-color: ${props => (props.bgColor ? props.bgColor : colors.canvas)};
  width: ${props => (props.width ? `${props.width}px` : "500px")};
  height: ${props => (props.height ? `${props.height}px` : "500px")};
`;
