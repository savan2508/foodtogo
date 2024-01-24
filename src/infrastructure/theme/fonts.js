/**
 * @module theme.fonts
 * @description Font configurations for the application theme.
 * @exports fonts
 * @exports fontWeights
 * @exports fontSizes
 */

/**
 * @constant {Object} fonts - Font families used in the application.
 * @property {string} body - Font family for body text.
 * @property {string} heading - Font family for heading text.
 * @property {string} monospace - Font family for monospace text.
 */
export const fonts = {
  body: "Oswald_400Regular",
  heading: "Lato_400Regular",
  monospace: "Oswald_400Regular",
};

/**
 * @constant {Object} fontWeights - Font weight values used in the application.
 * @property {number} regular - Regular font weight.
 * @property {number} medium - Medium font weight.
 * @property {number} bold - Bold font weight.
 */
export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

/**
 * @constant {Object} fontSizes - Font size values used in the application.
 * @property {string} caption - Font size for captions.
 * @property {string} button - Font size for buttons.
 * @property {string} body - Font size for body text.
 * @property {string} title - Font size for titles.
 * @property {string} h5 - Font size for heading level 5.
 * @property {string} h4 - Font size for heading level 4.
 * @property {string} h3 - Font size for heading level 3.
 * @property {string} h2 - Font size for heading level 2.
 * @property {string} h1 - Font size for heading level 1.
 */
export const fontSizes = {
  caption: "12px",
  button: "14px",
  body: "16px",
  title: "20px",
  h5: "24px",
  h4: "34px",
  h3: "45px",
  h2: "56px",
  h1: "112px",
};
