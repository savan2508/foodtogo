import { Searchbar } from "react-native-paper";
import { styled } from "styled-components/native";
import { LocationContext } from "../../../services/locations/location.context";
import React, { useContext, useEffect } from "react";

/**
 * @component
 * @description Styled View component for the search container.
 */
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchArea = ({ isFavouriteToggled, onFavouriteToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouriteToggle}
        placeholder="Search for a location"
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </SearchContainer>
  );
};
