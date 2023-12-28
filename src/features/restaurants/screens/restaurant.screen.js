// Import necessary modules from React Native and third-party libraries
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { styled } from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

// Styled components for the screen layout
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// Main functional component for the RestaurantsScreen
export const RestaurantsScreen = () => {
  // Get restaurant data from the context
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

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
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {/* List of restaurants */}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            {/* Restaurant card */}
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
