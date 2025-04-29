import {Link, Route, Routes} from 'react-router-dom';

import ThemeSwitcher from './components/ThemeSwitcher';
import CharacterList from './pages/CharacterList';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow p-4 z-10" role="navigation" aria-label="Navegação principal">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Home
            </Link>
            <Link to="/characters" className="text-blue-600 dark:text-blue-400 hover:underline" aria-current={location.pathname === '/characters' ? 'page' : undefined}>
              Personagens
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
      <main className="max-w-7xl mx-auto pt-16" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
