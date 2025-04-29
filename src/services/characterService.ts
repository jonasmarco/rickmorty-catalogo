import type {Character} from '../types/Character';

interface GetCharactersParams {
  pageParam: number;
  queryKey: readonly ['characters', string];
}

export async function getCharacters({pageParam, queryKey}: GetCharactersParams): Promise<{
  results: Character[];
  info: {next: string | null};
}> {
  const [, nameFilter] = queryKey;
  const url = new URL('https://rickandmortyapi.com/api/character');
  url.searchParams.set('page', String(pageParam));
  if (nameFilter) url.searchParams.set('name', nameFilter);

  const res = await fetch(url.toString());
  if (!res.ok) {
    if (res.status === 404) {
      return {results: [], info: {next: null}};
    }
    throw new Error('Falha ao buscar os personagens');
  }
  return res.json();
}
