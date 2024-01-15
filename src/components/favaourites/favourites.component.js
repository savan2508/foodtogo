import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { styled } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled.TouchableOpacity`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  return (
    <FavouriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavouriteButton>
  );
};
