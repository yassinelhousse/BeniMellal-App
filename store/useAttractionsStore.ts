import {create} from "zustand";

// MMKV may be exported as a type-only symbol; import the type for TS and require the runtime value
import type { MMKV as MMKVType } from "react-native-mmkv";
const { MMKV } = require("react-native-mmkv");
import { fetchPlaceById } from "@/services/api";  
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


const storage = new MMKV();


type Attraction = {// Define the structure of an attraction(optionel)
     id: string;
     name: string;
     description: string;
     images: string[];
     thumbnail: string;
     coordinations: {
        latitude: number;
        longitude: number;
     };
    



}

//type de store
type State = {
  favorites: string[];
  place: Attraction | null;
  loading: boolean;
  loadPlace: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

// Zustand storre+ mmkv
export const useAttractionsStore = create<AttractionsState>((set,get) => ({
    favorites: JSON.parse(storage.getString("favorites") || "[]"),
    place: null,
    loading: false,
    loadPlace: async (id: string) => {
        set({loading: true});

        try {
            const data = await fetchPlaceById(id);
            set({place: data, loading: false});
        }catch(e){
            console.error("Error loading place:", e);
            set({loading: false});
        }

    },

    toggleFavorite: (id: string) => {
        const {favorites} = get();
        const updated= favorites.includes(id)
        ? favorites.filter((f) => f !== id)
        : [...favorites, id];
        storage.set("favorites", JSON.stringify(updated));
        set({favorites: updated});
    },

    isFavorite: (id: any) => get().favorites.includes(id),

    

}));
    







