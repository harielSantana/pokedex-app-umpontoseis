import axios from 'axios';
import { POKEMON_API_BASE_URL } from '@/constants/pokemon';
import { Pokemon, PokemonListResponse, PokemonDetailResponse } from '@/types/pokemon';

const api = axios.create({
  baseURL: POKEMON_API_BASE_URL,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export const pokemonApi = {
  // Get paginated list of pokemon
  getPokemonList: async (offset: number = 0, limit: number = 20): Promise<PokemonListResponse> => {
    const response = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  },

  // Get pokemon by name or id
  getPokemon: async (nameOrId: string | number): Promise<PokemonDetailResponse> => {
    const response = await api.get(`/pokemon/${nameOrId}`);
    return response.data;
  },

  // Get pokemon by URL (for evolution chains, etc.)
  getPokemonByUrl: async (url: string): Promise<PokemonDetailResponse> => {
    const response = await api.get(url);
    return response.data;
  },

  // Search pokemon by name
  searchPokemon: async (query: string): Promise<Pokemon[]> => {
    try {
      // First try direct search
      const pokemon = await pokemonApi.getPokemon(query.toLowerCase());
      return [pokemon];
    } catch (error) {
      // If direct search fails, try searching through the list
      const listResponse = await pokemonApi.getPokemonList(0, 1000);
      const matchingPokemon = listResponse.results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      
      if (matchingPokemon.length === 0) {
        return [];
      }

      // Get full details for matching pokemon
      const pokemonDetails = await Promise.all(
        matchingPokemon.slice(0, 20).map(pokemon => 
          pokemonApi.getPokemonByUrl(pokemon.url)
        )
      );

      return pokemonDetails;
    }
  },
};

export default api;
