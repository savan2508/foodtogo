import { styled } from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const variants = {
  title: (theme) => `
    font-size: ${theme.fontSizes.title};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
  `,
  body: (theme) => `
    font-size: ${theme.fontSizes.body};
  `,
  hint: (theme) => `
    font-size: ${theme.fontSizes.body};
  `,
  error: (theme) => `
    color: ${theme.colors.text.error};
  `,
  caption: (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
  `,
  label: (theme) => `
        font-family: ${theme.fonts.heading};
        font-size: ${theme.fontSizes.body};
        font-weight: ${theme.fontWeights.medium};
    `,
};

export const TextCustom = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

TextCustom.defaultProps = {
  variant: "body",
};
