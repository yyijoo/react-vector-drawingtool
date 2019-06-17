import styled from "styled-components";
import * as colors from "common/colors";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colors.overall};
  height: 100%;
`;

export const LeftContainer = styled.div`
  width: 80px;
  flex-basis: 80px;
  flex-grow: 0;
`;

export const MiddleContainer = styled.div`
  flex-grow: 1;
`;

export const RightContainer = styled.div`
  flex-basis: 100px;
  flex-grow: 0;
`;
