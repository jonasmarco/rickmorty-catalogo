const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 flex flex-col items-center animate-pulse" role="presentation" aria-label="Carregando informações do personagem">
    <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mb-4" aria-hidden="true" />
    <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-2" aria-hidden="true" />
    <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" aria-hidden="true" />
  </div>
);

export default SkeletonCard;
