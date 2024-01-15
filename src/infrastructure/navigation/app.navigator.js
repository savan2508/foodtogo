import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

// Settings screen component
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
// Icon configurations for bottom tab navigation
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

/**
 * Function to create screen options for bottom tab navigation.
 * @function createScreenOptions
 * @param {Object} params - Parameters containing route and color information.
 * @returns {JSX.Element} JSX element representing the Ionicons icon for the tab.
 */
const createScreenOptions = ({ route, color }) => {
  const iconName = TAB_ICON[route.name];
  return <Ionicons name={iconName} size={22} color={color} />;
};

export const AppNavigator = () => {
  return (
    <>
      {/* Navigation container for routing */}
      <NavigationContainer>
        {/* Bottom tab navigator */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
            tabBarIcon: ({ color }) => createScreenOptions({ route, color }),
          })}
        >
          {/* Screen for displaying restaurant data */}
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{ headerShown: false }}
          />
          {/* Screen for the map */}
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          {/* Screen for app settings */}
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
