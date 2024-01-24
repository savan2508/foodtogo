/**
 * @module services/restaurants/restaurants.context
 * @description Context for managing restaurant data within the application.
 * @exports RestaurantsContext
 * @exports RestaurantContextProvider
 */

import { useState, createContext, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../locations/location.context";

/**
 * @constant {Object} RestaurantsContext - Context object for managing restaurant data.
 * @property {Array} restaurants - An array of restaurant data.
 * @property {boolean} isLoading - A boolean indicating whether restaurant data is currently being loaded.
 * @property {Object} error - An object containing details of any error that occurred while fetching restaurant data.
 */
export const RestaurantsContext = createContext();

/**
 * @function RestaurantContextProvider
 * @description Provider component for the RestaurantsContext.
 * Manages the state of restaurant data, loading status, and error handling.
 * @param {Object} props - React component properties.
 * @param {ReactNode} props.children - Child components to be wrapped by the context provider.
 * @returns {JSX.Element} JSX element representing the context provider.
 */
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  /**
   * @function retriveRestaurants
   * @description Retrieves restaurant data, transforms it, and updates the context state.
   * Uses a simulated delay for loading.
   */
  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    });
  };

  // Fetch restaurant data on component mount
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        error: error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
