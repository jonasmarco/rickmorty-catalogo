import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({value, onChange, loading}) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none" aria-hidden="true">
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input
      type="text"
      role="searchbox"
      aria-label="Filtrar personagens por nome"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Filtrar por nome..."
      className="pl-10 pr-4 py-2 w-full border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />

    {loading && (
      <div className="absolute inset-y-0 right-3 flex items-center" aria-hidden="true">
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" role="status" aria-label="Carregando resultados" />
      </div>
    )}
  </div>
);

export default SearchInput;
