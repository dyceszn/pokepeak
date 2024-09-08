import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

export type PokemonData = {
  position: {
    lat: number;
    lng: number;
  };
  content: {
    id: number;
    nickname: string;
    name: string;
    type: string;
    level: number;
    img: string;
    location: string;
    description: string;
  };
};
export type searchFormData = {
  name: string;
  location: string;
  level: number;
  nickname?: string;
};

export const getGlobalData = async (): Promise<PokemonData[] | null> => {
  try {
    const ref = doc(db, "globalData", "pokemon-sightings");
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data().pokemonArray;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting global data:", error);
    return null;
  }
};

export const searchData = async (formData: searchFormData) => {
  const globalData = await getGlobalData();
  if (!globalData) return [];
  const searchedData = globalData.filter(
    (pokemon: PokemonData) =>
      (pokemon.content.name == formData.name &&
        pokemon.content.level === formData.level) ||
      pokemon.content.nickname === formData.nickname
  );
  return searchedData;
};

export const pushToGlobalData = async (pokemon: PokemonData) => {
  try {
    const ref = doc(db, "globalData", "pokemon-sightings");
    await updateDoc(ref, {
      pokemonArray: arrayUnion(pokemon),
    });
  } catch (error) {
    console.error("Error pushing to global data:", error);
  }
};

export const createGlobalData = async () => {
  try {
    const ref = doc(db, "globalData", "pokemon-sightings");
    await setDoc(ref, {
      pokemonArray: [],
    });
  } catch (error) {
    console.error("Error creating global data:", error);
  }
};
