/**
 * @module services/restaurants/restaurants.service
 * @description Service functions for handling restaurant data.
 * @exports restaurantsRequest
 * @exports restaurantsTransform
 */

import { mockImages, mocks } from "./mock";
import camelize from "camelize";

/**
 * @function restaurantsRequest
 * @description Fetches restaurant data based on the provided location.
 * @param {string} location - Location coordinates in the format "latitude,longitude".
 * @returns {Promise} A Promise that resolves with the restaurant data or rejects with an error message.
 */
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

/**
 * @function restaurantsTransform
 * @description Transforms raw restaurant data into a standardized format.
 * @param {Object} data - Raw restaurant data.
 * @param {Array} data.results - Array of restaurant results.
 * @returns {Array} An array of transformed restaurant data with added properties.
 */
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    // Map photos to random mock images
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    restaurant.address = restaurant.vicinity;
    // Add additional properties for convenience
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  // Convert keys to camel case for consistency
  return camelize(mappedResults);
};
