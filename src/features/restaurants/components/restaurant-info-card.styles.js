/**
 * @module restaurant-info-card.styles
 * @description Styled components for the RestaurantInfoCard component, including Card, Text, and Image styling.
 * @exports RestaurantCard
 * @exports RestaurantCardCover
 * @exports Address
 * @exports Rating
 * @exports Info
 * @exports Section
 * @exports SectionEnd
 * @exports Icon
 */

import { styled } from "styled-components/native";
import { Card } from "react-native-paper";
import { TextCustom } from "../../../components/typography/textcustom.component";

/**
 * @component
 * @description Styled Card component for displaying restaurant information.
 */
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

/**
 * @component
 * @description Styled Card.Cover component for displaying the cover image of the restaurant card.
 */
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

/**
 * @component
 * @description Styled TextCustom component for displaying the address of the restaurant.
 */
export const Address = styled(TextCustom)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

/**
 * @component
 * @description Styled View component for displaying the rating of the restaurant.
 */
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

/**
 * @component
 * @description Styled View component for wrapping restaurant information.
 */
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

/**
 * @component
 * @description Styled View component for a horizontal section within the restaurant card.
 */
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

/**
 * @component
 * @description Styled View component for a section at the end of the restaurant card, with items aligned to the right.
 */
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

/**
 * @component
 * @description Styled Image component for displaying icons within the restaurant card.
 */
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
