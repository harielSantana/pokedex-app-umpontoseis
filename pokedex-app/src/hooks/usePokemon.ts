import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { pokemonApi } from '@/services/api';
import { Pokemon, FilterState } from '@/types/pokemon';

export const usePokemonList = (filters?: FilterState) => {
  return useInfiniteQuery({
    queryKey: ['pokemon-list', filters],
    queryFn: ({ pageParam = 0 }) => pokemonApi.getPokemonList(pageParam, 20),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const offset = url.searchParams.get('offset');
        return offset ? parseInt(offset) : undefined;
      }
      return undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePokemon = (nameOrId: string | number) => {
  return useQuery({
    queryKey: ['pokemon', nameOrId],
    queryFn: () => pokemonApi.getPokemon(nameOrId),
    enabled: !!nameOrId,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const usePokemonSearch = (query: string) => {
  return useQuery({
    queryKey: ['pokemon-search', query],
    queryFn: () => pokemonApi.searchPokemon(query),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};
