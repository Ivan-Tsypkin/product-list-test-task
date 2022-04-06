import styled from "styled-components";
import BoxStylesProps from "../interfaces/BoxStylesProps";

export const Box = styled.div<BoxStylesProps>`
  position: ${(p) => (p.relative ? "relative" : "")};
  position: ${(p) => (p.absolute ? "absolute" : "")};
  width: ${(p) => (p.width !== undefined ? `${p.width}` : "")};
  height: ${(p) => (p.height !== undefined ? `${p.height}` : "")};
  box-sizing: ${(p) => (p.borderBox ? "border-box" : "")};
  padding: ${(p) => (p.padding !== undefined ? `${p.padding}` : "")};
  top: ${(p) => (p.top !== undefined ? `${p.top}` : "")};
  left: ${(p) => (p.left !== undefined ? `${p.left}` : "")};
  display: ${(p) => (p.flex ? "flex" : "")};
  flex-direction: ${(p) => (p.column ? "column" : "")};
  justify-content: ${(p) => (p.between ? "space-between" : "")};
  align-items: ${(p) => (p.flexEnd ? `flex-end` : "")};
`;