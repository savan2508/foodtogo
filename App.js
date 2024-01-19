import "react-native-gesture-handler";
// Import necessary modules from React Native and third-party libraries

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";

// Import fonts and Text component from React Native
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";
import { useEffect, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "./src/services/authentication/authentication.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmKjPYAVuV21WzbePNSEuEIC74i1_Fvy8",
  authDomain: "foodtogo-d9247.firebaseapp.com",
  projectId: "foodtogo-d9247",
  storageBucket: "foodtogo-d9247.appspot.com",
  messagingSenderId: "596026741629",
  appId: "1:596026741629:web:0cf61d13cd27c2ca80b214",
};

firebase.initializeApp(firebaseConfig);

// Main App component
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("email", "password")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
