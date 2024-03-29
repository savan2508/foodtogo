/**
 * @module restaurant.screen
 * @description Screen component for displaying a list of restaurants with a search bar and loading indicator.
 * @exports RestaurantsScreen
 */

// Import necessary modules from React Native and third-party libraries
import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { SearchArea } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favaourites/favourites-bar.component";

// Styled components for the screen layout
/**
 * @component
 * @description Styled FlatList component for displaying the list of restaurants.
 */
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

/**
 * @component
 * @description Styled ActivityIndicator component for displaying a loading indicator.
 */
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

/**
 * @component
 * @description Styled View component for a container to position the loading indicator.
 */
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

/**
 * @component
 * @description Main functional component for the RestaurantsScreen.
 */

export const RestaurantsScreen = ({ navigation }) => {
  // Get restaurant data from the context
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  // Render the main component tree
  return (
    <SafeArea>
      {/* Display loading indicator if data is still loading */}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      {/* Search bar container */}
      <SearchArea
        isFavouriteToggled={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {/* List of restaurants */}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  {/* Restaurant card */}
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
