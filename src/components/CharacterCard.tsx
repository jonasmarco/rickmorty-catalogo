import React from 'react';

import type {Character} from '../types/Character';

interface Props {
  char: Character;
}

const CharacterCard: React.FC<Props> = React.memo(({char}) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center" role="group">
    <div className="overflow-hidden rounded-full mb-4">
      <img src={char.image} alt={char.name} className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-110" loading="lazy" />
    </div>
    <h3 className="font-bold text-center mb-1 dark:text-white">{char.name}</h3>
    <div className="flex items-center space-x-2">
      <span
        className={`
          inline-block w-3 h-3 rounded-full
          ${char.status === 'Alive' ? 'bg-green-500' : char.status === 'Dead' ? 'bg-red-500' : 'bg-yellow-500'}
        `}
        aria-label={`Status: ${char.status}`}
      />
      <span className="text-sm text-gray-600 dark:text-gray-300">{char.status}</span>
    </div>
  </div>
));

export default CharacterCard;
