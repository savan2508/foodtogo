/**
 * @module textcustom.component
 * @description A styled component for rendering text with customizable styles and variants.
 * @exports TextCustom
 */

import { styled } from "styled-components/native";

/**
 * @function
 * @description Returns default text styles based on the theme.
 * @param {Object} theme - The theme object from styled-components.
 * @returns {string} - Default text styles.
 */
const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

/**
 * @function
 * @description Returns text styles for the body variant based on the theme.
 * @param {Object} theme - The theme object from styled-components.
 * @returns {string} - Body text styles.
 */
const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

/**
 * @constant {Object} variants - Mapping of text variants to their corresponding style functions.
 */
const variants = {
  title: (theme) => `
    font-size: ${theme.fontSizes.title};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
  `,
  body: body,
  hint: body,
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

/**
 * @component
 * @description A styled Text component with customizable styles and variants.
 * @property {string} variant - The text variant to apply styles (title, body, hint, error, caption, label).
 * @property {Object} theme - The theme object from styled-components.
 */
export const TextCustom = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;
