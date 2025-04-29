const HomePage = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold dark:text-white">Rick & Morty Catalogue</h1>
      <a
        href="https://github.com/jonasmarco/rickmorty-catalogo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <span>GitHub</span>
      </a>
    </div>

    <div className="space-y-6 dark:text-gray-300">
      <p className="text-lg">Bem-vindo ao catálogo de personagens! Esta aplicação demonstra o uso de tecnologias modernas no React.</p>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Detalhes Técnicos da Implementação</h2>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong className="dark:text-gray-200">React Query:</strong> Implementado para gerenciamento de estado servidor, permitindo cache automático e revalidação dos dados.
          </li>
          <li>
            <strong className="dark:text-gray-200">Infinite Scroll:</strong> Utiliza IntersectionObserver para carregamento dinâmico de mais personagens ao rolar a página.
          </li>
          <li>
            <strong className="dark:text-gray-200">Debounce na Busca:</strong> A busca é otimizada com debounce de 500ms, reduzindo chamadas desnecessárias à API.
          </li>
          <li>
            <strong className="dark:text-gray-200">Tema Persistente:</strong> Preferência de tema (claro/escuro) salva no localStorage.
          </li>
        </ul>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Navegue para a página de "Personagens" para ver estas funcionalidades em ação.</p>
      </div>
    </div>
  </div>
);

export default HomePage;
