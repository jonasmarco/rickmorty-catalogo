import React from 'react';

import CharacterCard from '../components/CharacterCard';
import ScrollToTop from '../components/ScrollToTop';
import SearchInput from '../components/SearchInput';
import SkeletonCard from '../components/SkeletonCard';
import {useCharacterSearch} from '../hooks/useCharacterSearch';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';

const CharacterListPage: React.FC = () => {
  const {filter, setFilter, characters, loading, error, hasNextPage, fetchNextPage} = useCharacterSearch();

  const sentinelRef = useInfiniteScroll({
    hasNextPage,
    isLoading: loading,
    loadMore: fetchNextPage,
  });

  const showNoResults = !loading && characters.length === 0;

  return (
    <section className="p-8 px-4 sm:px-8 lg:px-16" aria-label="Lista de personagens">
      <h2 className="text-xl font-semibold mb-4 dark:text-white" id="characters-heading">
        Personagens
      </h2>

      <div className="mb-6">
        <SearchInput value={filter} onChange={setFilter} loading={loading} />
      </div>

      {error && (
        <p role="alert" className="text-red-500">
          Erro ao carregar personagens.
        </p>
      )}

      {showNoResults && (
        <p role="status" className="text-gray-600 dark:text-gray-400 text-center py-8">
          Nenhum personagem encontrado para "{filter}"
        </p>
      )}

      <div role="grid" aria-labelledby="characters-heading" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {characters.map(char => (
          <CharacterCard key={char.id} char={char} />
        ))}
        {loading && Array.from({length: 8}).map((_, i) => <SkeletonCard key={i} />)}
      </div>

      <div ref={sentinelRef} className="h-1" aria-hidden="true" />
      <ScrollToTop />
    </section>
  );
};

export default CharacterListPage;
