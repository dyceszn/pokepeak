// import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { db } from '../configs/firebaseConfig';

// export const createGlobalData = async ( ) =>{
//     const ref = doc(db, 'globalData', 'pokemon-sightings');
//     await setDoc(ref, {
//         data:[],
//     })
// }

// export const getGlobalData = async () => {
//     const ref = doc(db, 'globalData', 'pokemon-sightings');
//     const docSnap = await getDoc(ref);
//     if(docSnap.exists()){
//         return docSnap.data();
//     }else{
//         return null;
//     }

// }

// export const pushToGlobalData = async (pokemon) => {
//     const ref = doc(db, 'globalData', 'pokemon-sightings');
//     await updateDoc(ref, {
//         data: arrayUnion(pokemon)
//     })
// }

// interface Pokemon {
//     position: {
//       lat: number;
//       lng: number;
//     };
//     content: {
//       id: number;
//       nickname: string;
//       name: string;
//       type: string;
//       level: number;
//       img: string;
//       location: string;
//       description: string;
//     };
//   }

// export let globalData: Pokemon[] = [
//     {
//       position: { lat: 37.7749, lng: -122.4194 },
//       content: {
//         id: 1,
//         name: "Bulbasaur",
//         nickname: "Bulba",
//         type: "Grass",
//         level: 1,
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//         location: "San Francisco",
//         description:
//           "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
//       },
//     },
//     {
//       position: { lat: 34.0522, lng: -118.2437 },
//       content: {
//         id: 4,
//         name: "Charmander",
//         nickname: "Bulba",
//         type: "Fire",
//         level: 1,
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//         location: "Los Angeles",
//         description:
//           "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
//       },
//     },
//     {
//       position: { lat: 40.7128, lng: -74.006 },
//       content: {
//         id: 7,
//         name: "Squirtle",
//         nickname: "Bulba",
//         type: "Water",
//         level: 1,
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//         location: "New York",
//         description:
//           "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
//       },
//     },
//     {
//       position: { lat: 41.8781, lng: -87.6298 },
//       content: {
//         id: 25,
//         name: "Pikachu",
//         nickname: "Bulba",
//         type: "Electric",
//         level: 1,
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
//         location: "Chicago",
//         description:
//           "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
//       },
//     },
//     {
//       position: { lat: 29.7604, lng: -95.3698 },
//       content: {
//         id: 133,
//         name: "Eevee",
//         nickname: "Bulba",
//         type: "Normal",
//         level: 1,
//         img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
//         location: "Houston",
//         description:
//           "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
//       },
//     },
//   ];
