/**
 * @module App
 * @description Main entry point for the React Native application.
 * @exports App
 */

// Import necessary modules from React Native and third-party libraries
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// Import fonts and Text component from React Native
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";

/**
 * Main App component.
 * @function App
 * @returns {JSX.Element} JSX element representing the main application component.
 */
export default function App() {
  // Load fonts using custom hooks
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // If fonts are not loaded, return null (show nothing)
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // Render the main component tree
  return (
    <>
      {/* Theme provider for styled components */}
      <ThemeProvider theme={theme}>
        {/* Context provider for location data */}
        <LocationContextProvider>
          {/* Context provider for restaurant data */}
          <RestaurantContextProvider>
            <AppNavigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      {/* Expo status bar */}
      <ExpoStatusBar style="auto" />
    </>
  );
}
