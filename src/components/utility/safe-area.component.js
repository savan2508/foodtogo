/**
 * @module safe-area.component
 * @description A styled component for creating a SafeAreaView with consideration for the device's status bar.
 * @exports SafeArea
 */

import { styled } from "styled-components/native";
import { SafeAreaView, StatusBar } from "react-native";

/**
 * @component
 * @description A styled SafeAreaView component with flex set to 1 and an optional margin-top to account for the device's status bar.
 * @property {Object} theme - The theme object from styled-components.
 */
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
