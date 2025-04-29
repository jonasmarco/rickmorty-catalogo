# Rick and Morty Character Catalogue

Um catálogo interativo de personagens de Rick and Morty construído com React, TypeScript e Vite.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Query v5
- React Router DOM v7

## ✨ Funcionalidades

- Listagem infinita de personagens
- Busca em tempo real com debounce
- Tema claro/escuro persistente
- Design responsivo
- Totalmente acessível

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/jonasmarco/rickmorty-catalogo.git

# Entre no diretório
cd rickmorty-catalogo

# Instale as dependências
yarn

# Inicie o servidor de desenvolvimento
yarn dev
```

## 🔨 Decisões Técnicas

### React Query

- Implementado para gerenciamento de estado servidor
- Cache configurado para 5 minutos (staleTime)
- Retry limitado a 1 tentativa para melhor UX

### Infinite Scroll

- Utiliza IntersectionObserver para detecção de rolagem
- Loading skeleton para feedback visual
- Mantém estado entre navegações

### Performance

- Lazy loading de imagens
- Debounce na busca (500ms)
- Memoização de componentes onde apropriado
- Cache otimizado para reduzir requisições

### Acessibilidade

- Roles ARIA apropriados
- Labels descritivos
- Suporte a navegação por teclado
- Estados interativos claramente indicados

### Tema Dark/Light

- Persiste preferência do usuário
- Transições suaves
- Implementado com TailwindCSS
- Contraste adequado em ambos os temas

## 📱 Layout Responsivo

- Mobile First
- Grid adaptativo
- Layout fluido
- Breakpoints otimizados

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build
yarn build

# Preview do build
yarn preview

# Lint
yarn lint

# Formatação
yarn format
```

## 📄 Licença

MIT

## 👤 Autor

Jonas Tolentino
