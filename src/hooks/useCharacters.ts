import {useInfiniteQuery} from '@tanstack/react-query';

import {getCharacters} from '../services/characterService';

import type {InfiniteData} from '@tanstack/react-query';
import type {Character} from '../types/Character';

interface CharactersResponse {
  results: Character[];
  info: {
    next: string | null;
  };
}

export function useCharacters(nameFilter: string) {
  return useInfiniteQuery<CharactersResponse, Error, InfiniteData<CharactersResponse>, ['characters', string], number>({
    queryKey: ['characters', nameFilter] as const,
    queryFn: ({pageParam, queryKey}) => getCharacters({pageParam, queryKey}),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const nextUrl = lastPage.info.next;
      if (!nextUrl) return undefined;
      return Number(new URL(nextUrl).searchParams.get('page') ?? '');
    },
  });
}
