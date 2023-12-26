import { styled } from "styled-components/native";
import { useTheme } from "styled-components";

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeValue = sizesVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeValue];
  return `${property}: ${value}`;
};

const SpaceView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variable = getVariant(position, size, theme);
  return <SpaceView variant={variable}>{children}</SpaceView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
