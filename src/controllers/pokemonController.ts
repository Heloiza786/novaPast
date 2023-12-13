
import api from "../services/api";

type PokemonType = {
 
  id: number;
  name: string;
 
};

type Pokemon = {
  name: string;
  url: string;
 
};

export async function getAllPokemon(): Promise<Pokemon[]> {
 
    const response = await api.get('pokemon');
    const { results } = response.data;

    const payloadPokemons: Pokemon[] = await Promise.all(
      results.map(async (pokemon: { name: string; url: string }) => {
      
        return {
          name: pokemon.name,
          url: pokemon.url,
        
        };
      })
    );

    return payloadPokemons;
//   } catch (error) {
//     console.error("Error Pokemon:", error);
//     throw error;
  
 }
