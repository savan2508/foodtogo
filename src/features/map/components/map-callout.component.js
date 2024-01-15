import { styled } from "styled-components/native";
import { Text } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MapScreenText = styled(Text)``;

export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <CompactRestaurantInfo restaurant={restaurant} />
    </>
  );
};
