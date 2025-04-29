import React from 'react';

import {useTheme} from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
