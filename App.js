// Import necessary modules from React Native and third-party libraries

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Import fonts and Text component from React Native
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

// Main App component
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Settings: "md-settings",
    Map: "md-map",
  };
  const createScreenOptions = ({ route, color }) => {
    const iconName = TAB_ICON[route.name];
    return <Ionicons name={iconName} size={22} color={color} />;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
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
                  tabBarIcon: ({ color }) =>
                    createScreenOptions({ route, color }),
                })}
              >
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Map"
                  component={Map}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
