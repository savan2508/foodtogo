/**
 * @module colors
 * @description Defines the color palette used for theming in the application.
 * @exports colors
 */

/**
 * @constant {Object} colors
 * @description The color palette with categorized color groups.
 */
export const colors = {
  brand: {
    /**
     * @property {string} primary - The primary brand color used for key brand elements.
     */
    primary: "#2182BD",

    /**
     * @property {string} secondary - A secondary brand color for complementary elements.
     */
    secondary: "#5282BD",

    /**
     * @property {string} muted - A muted brand color for background or subtle accents.
     */
    muted: "#C6DAF7",
  },
  ui: {
    /**
     * @property {string} primary - The primary UI color for text and prominent UI elements.
     */
    primary: "#262626",

    /**
     * @property {string} secondary - A secondary UI color for less prominent UI elements.
     */
    secondary: "#757575",

    /**
     * @property {string} tertiary - A tertiary UI color for additional UI elements.
     */
    tertiary: "#F1F1F1",

    /**
     * @property {string} quaternary - A quaternary UI color for background or subtle UI accents.
     */
    quaternary: "#FFFFFF",

    /**
     * @property {string} disabled - The color for disabled or inactive UI elements.
     */
    disabled: "#DEDEDE",

    /**
     * @property {string} error - The color representing error or alert status.
     */
    error: "#D0421B",

    /**
     * @property {string} success - The color representing success or positive status.
     */
    success: "#138000",
  },
  bg: {
    /**
     * @property {string} primary - The primary background color.
     */
    primary: "#FFFFFF",

    /**
     * @property {string} secondary - A secondary background color.
     */
    secondary: "#F1F1F1",
  },
  text: {
    /**
     * @property {string} primary - The primary text color.
     */
    primary: "#262626",

    /**
     * @property {string} secondary - A secondary text color.
     */
    secondary: "#757575",

    /**
     * @property {string} disabled - The color for disabled or inactive text.
     */
    disabled: "#9C9C9C",

    /**
     * @property {string} inverse - The color for text on a contrasting background.
     */
    inverse: "#FFFFFF",

    /**
     * @property {string} error - The color for text indicating error or alert status.
     */
    error: "#D0421B",

    /**
     * @property {string} success - The color for text indicating success or positive status.
     */
    success: "#138000",
  },
};
