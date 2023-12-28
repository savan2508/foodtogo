/**
 * @module restaurant-info-card.component
 * @description A component for displaying restaurant information, including name, rating, status, and address.
 * @exports RestaurantInfoCard
 * @param {Object} restaurant - The restaurant object containing information such as name, rating, photos, address, etc.
 * @property {string} restaurant.name - The name of the restaurant.
 * @property {string} restaurant.icon - The URL of the restaurant's icon or logo.
 * @property {Array<string>} restaurant.photos - An array of URLs for photos of the restaurant.
 * @property {string} restaurant.address - The address of the restaurant.
 * @property {boolean} restaurant.isOpenNow - Indicates whether the restaurant is currently open.
 * @property {number} restaurant.rating - The rating of the restaurant (numeric value).
 * @property {boolean} restaurant.isClosedTemporarily - Indicates whether the restaurant is closed temporarily.
 * @example
 * // Example usage of RestaurantInfoCard component
 * <RestaurantInfoCard
 *   restaurant={{
 *     name: "Some Restaurant",
 *     icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
 *     photos: ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
 *     address: "100 some random street",
 *     isOpenNow: true,
 *     rating: 3.5,
 *     isClosedTemporarily: true,
 *   }}
 * />
 */

import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextCustom } from "../../../components/typography/textcustom.component";
import {
  Address,
  Info,
  Icon,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

/**
 * @component
 * @description A component for displaying restaurant information, including name, rating, status, and address.
 * @param {Object} props - The component properties.
 * @property {Object} props.restaurant - The restaurant object containing information such as name, rating, photos, address, etc.
 */

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3.5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(Math.ceil(rating))));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <TextCustom variant="label">{name}</TextCustom>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${name}-${i}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TextCustom variant="error">CLOSED TEMPORARILY</TextCustom>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

/**
 * @defaultprops
 * @property {Object} restaurant - Default restaurant object with placeholder values.
 */
RestaurantInfoCard.defaultProps = {
  restaurant: {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 3.5,
    isClosedTemporarily: true,
  },
};
