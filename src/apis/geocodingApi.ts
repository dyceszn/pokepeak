import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GEOCODING_API_KEY;

// Get location from latlng

export const getLocation = async (latlng: string) => {
  // Format: latlng: "37.4224764,-122.0842499"
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.results[0];
    const address = data.formatted_address;
    // console.log(address);
    return address;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error("Error: Location not found");
    } else {
      console.error("Error:", error);
    }
    return null;
  }
};

// Get latlng from address

export const getLatLng = async (address: string) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data.results[0];
    const latlng = data.geometry.location;
    // console.log(latlng); // Format: { lat: 37.4224764, lng: -122.0842499 }
    return latlng;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error("Error: Location not found");
    } else {
      console.error("Error:", error);
    }
    return null;
  }
};
