/**
 * @module theme
 * @description Aggregated theme configuration for the application.
 * Combines color palette, spacing, sizes, and font configurations into a single theme object.
 * @exports theme
 */

import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

/**
 * @constant {Object} theme - Aggregated theme object containing colors, spacing, sizes, and fonts.
 * @property {Object} theme.colors - Color palette for the application.
 * @property {Object} theme.space - Spacing values for layout.
 * @property {Object} theme.lineHeights - Line height values for text elements.
 * @property {Object} theme.sizes - Sizes for various components and elements.
 * @property {Object} theme.fonts - Font families used in the application.
 * @property {Object} theme.fontSizes - Font size values used in the application.
 * @property {Object} theme.fontWeights - Font weight values used in the application.
 */
export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
