import { create } from "zustand";
import type { MMKV } from "react-native-mmkv";
import { fetchPlaceById } from "../services/api";

const { MMKV: MMKVRuntime } = require("react-native-mmkv");
const storage = new MMKVRuntime();

type Attraction = {
  id: string;
  name: string;
  description: string;
  thumbnail: string; // ✅ matches API
  images: string[];  // ✅ matches API
  coordination?: {
    latitude: number;
    longitude: number;
  };
};

type State = {
  favorites: string[];
  place: Attraction | null;
  loading: boolean;
  loadPlace: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useAttractionsStore = create<State>((set, get) => ({
  favorites: JSON.parse(storage.getString("favorites") || "[]"),
  place: null,
  loading: false,

  loadPlace: async (id) => {
    set({ loading: true });
    try {
      const data = await fetchPlaceById(id);
      set({ place: data, loading: false });
    } catch (e) {
      console.error("❌ Error loading place:", e);
      set({ loading: false });
    }
  },

  toggleFavorite: (id) => {
    const { favorites } = get();
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    storage.set("favorites", JSON.stringify(updated));
    set({ favorites: updated });
  },

  isFavorite: (id) => get().favorites.includes(id),
}));
