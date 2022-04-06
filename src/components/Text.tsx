import styled from "styled-components";
import TextStylesProps from "../interfaces/TextStylesProps";

export const Text = styled.span<TextStylesProps>`
  color: ${(p) => (p.color !== undefined ? `${p.color}` : "")};
  line-height: ${(p) => (p.lineHeight !== undefined ? `${p.lineHeight}` : "1.5")};
  font-weight: ${(p) => (p.fontWeight !== undefined ? `${p.fontWeight}` : "400")};
  font-size: ${(p) => (p.fontSize !== undefined ? `${p.fontSize}` : "16")};
  text-shadow: ${(p) => (p.textShadow !== undefined ? `${p.textShadow}` : "")};
`;