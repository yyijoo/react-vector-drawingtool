import styled from "styled-components";
import * as colors from "common/colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.overall};
  width: 100%;
  height: calc(100vh - 45px);
`;

export const LeftContainer = styled.div`
  background-color: ${colors.overall};
`;

export const MiddleContainer = styled.div`
  flex-grow: 1;
  overflow: scroll;
  background-color: ${colors.canvasBackground};
  width: calc(100vw - 8000px);
`;

export const RightContainer = styled.div`
  background-color: ${colors.overall};
`;
