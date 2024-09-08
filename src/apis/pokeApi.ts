import axios from "axios";

export const getPokemonData = async (pokemonName: string) => {
  const endpoint = pokemonName.toLowerCase();
  const url: string = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
  const cachedData = sessionStorage.getItem(url);

  if (cachedData) {
    const data = JSON.parse(cachedData);
    // console.log(data);
    // return data;
    const type = data.types.map((type: any) => type.type.name).join(", ");
    const img = data.sprites.other.showdown.front_default;
    const id = data.id;
    const neededData = [id, type, img];
    console.log("Pokemon details gotten successfully");
    return neededData;
  }

  try {
    const response = await axios.get(url);
    // console.log(response.data);
    const data = response.data;
    sessionStorage.setItem(url, JSON.stringify(data));
    const type = data.types.map((type: any) => type.type.name).join(", ");
    const img = data.sprites.other.showdown.front_default;
    const id = data.id;
    const neededData = [id, type, img];
    console.log("Pokemon details gotten successfully");
    return neededData;
    // return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error("Error: Pokémon not found");
    } else {
      console.error("Error:", error);
    }
    return null;
  }
};
