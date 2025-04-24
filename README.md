
# 📝 To Do List - React + TypeScript + Tailwind CSS

Uma aplicação moderna de lista de tarefas construída com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- ✨ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- 🗑️ Remover tarefas
- 🔍 Filtrar tarefas por status (Todas, Pendentes, Concluídas)
- 💾 Persistência automática de dados usando localStorage
- 📱 Layout totalmente responsivo

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Adiciona tipagem estática ao JavaScript
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **UUID** - Geração de IDs únicos
- **Vite** - Build tool e dev server

## 📦 Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── AddTask.tsx    # Componente para adicionar tarefas
│   ├── Filter.tsx     # Componente de filtros
│   └── TaskList.tsx   # Componente de lista de tarefas
├── types/             # Definições de tipos TypeScript
└── App.tsx           # Componente principal
```

## 💻 Como Executar

1. Clone o repositório
```bash
git clone https://github.com/LucGadelha/todo-gipyo
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npm run dev
```

## 🎯 Principais Características

### Gerenciamento de Estado
- Utilização de `useState` para gerenciamento local de estado
- Persistência automática usando `localStorage`
- Estado tipado com TypeScript

### Componentes
- **AddTask**: Formulário para adicionar novas tarefas
- **TaskList**: Lista de tarefas com funcionalidades de toggle e remoção
- **Filter**: Filtros para visualização das tarefas

### Tipos
```typescript
type Task = {
  id: string;
  title: string;
  status: 'pending' | 'completed';
};

type FilterType = 'all' | 'pending' | 'completed';
```

### Estilização
- Uso de Tailwind CSS para design responsivo
- Transições suaves
- Interface moderna e limpa
- Feedback visual para ações do usuário

## 🔍 Funcionalidades Detalhadas

### Adição de Tarefas
- Validação para evitar tarefas vazias
- Geração automática de IDs únicos
- Feedback visual na adição

### Gerenciamento de Tarefas
- Toggle de status com checkbox
- Remoção individual de tarefas
- Estilo diferenciado para tarefas concluídas

### Filtros
- Visualização de todas as tarefas
- Filtro de tarefas pendentes
- Filtro de tarefas concluídas

### Persistência
- Salvamento automático no localStorage
- Carregamento do estado na inicialização
- Persistência entre recarregamentos da página

### [Site](https://todo-list-gipyo.vercel.app)


