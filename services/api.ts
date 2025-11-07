import axios from "axios";

const URL = "https://6909d0261a446bb9cc201ef7.mockapi.io/places";

export type Place = {
  id: string;
  name: string;
  description: string;
  images: string[];
  thumbnail: string;
  coordinations: {
    latitude: number;
    longitude: number;
  };
};

export const fetchPlaces = async (): Promise<Place[]> => {
  try {
    const response = await axios.get<Place[]>(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
};

export const fetchPlaceById = async (id: string): Promise<Place> => {
  try {
    const response = await axios.get<Place>(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching place ${id}:`, error);
    throw error;
  }
};