import axios from "axios";


const API_URL = "https://6909d0261a446bb9cc201ef7.mockapi.io";

// Fetch ALL places (for list screen)
export const fetchPlaces = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching places:", error);
    throw error;
  }
};

//  Fetch ONE place by ID (for details screen)
export const fetchPlaceById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Error fetching place by ID (${id}):`, error);
    throw error;
  }
};
