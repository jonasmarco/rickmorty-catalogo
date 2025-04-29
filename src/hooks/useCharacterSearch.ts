import React from 'react';

import {useCharacters} from './useCharacters';
import {useDebounce} from './useDebounce';

import type {Character} from '../types/Character';

export function useCharacterSearch() {
  const [filter, setFilter] = React.useState('');
  const debouncedFilter = useDebounce(filter, 500);
  const query = useCharacters(debouncedFilter);

  const characters: Character[] = query.data?.pages.flatMap(page => page.results) ?? [];
  const loading = query.isLoading || query.isFetchingNextPage;

  return {
    filter,
    setFilter,
    characters,
    loading,
    error: query.isError,
    hasNextPage: query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
  };
}
