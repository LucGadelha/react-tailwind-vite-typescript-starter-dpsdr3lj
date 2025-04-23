# 🧩 Desafio Técnico: Aplicação de Lista de Tarefas

Crie uma aplicação moderna de **Lista de Tarefas** utilizando React, com foco em boas práticas de desenvolvimento, organização do código, e estilização com Tailwind CSS.

---

## 📋 Funcionalidades Obrigatórias

### 1. **Listagem de Tarefas**

- Cada tarefa deve ser representada pelo seguinte tipo:
  ```ts
  type Task = {
    id: string;
    title: string;
    status: 'pending' | 'completed';
  };
  ```
- Exibir cada tarefa em **cards estilizados com Tailwind CSS**.
- Layout deve ser **totalmente responsivo**.

### 2. **Adicionar Tarefa**

- Campo de texto para digitar o título da tarefa.
- Validação mínima (não aceitar string vazia ou apenas espaços).
- Botão para adicionar a tarefa na lista.

### 3. **Alternar Status (Toggle)**

- Clicar em uma tarefa alterna seu status entre `pending` e `completed`.

### 4. **Estilo Condicional**

- Tarefas concluídas devem ter **estilo visual diferenciado**, como `line-through` no texto.

### 5. **Remover Tarefa**

- Botão de remoção individual por tarefa.

### 6. **Filtro por Status** _(Bônus)_

- Botões ou dropdown para filtrar a visualização:
  - `Todas`
  - `Pendentes`
  - `Concluídas`

### 7. **Persistência com localStorage**

- As tarefas devem ser salvas no `localStorage`.
- Carregar automaticamente a lista ao abrir a aplicação.

---

## 🛠️ Tecnologias Exigidas

- [ ] **React** (com Hooks)
- [ ] **TypeScript**
- [ ] **Tailwind CSS**
- [ ] **LocalStorage API**

---

## 🎯 Critérios de Avaliação

- ✅ Uso correto e limpo de **React com Hooks** (`useState`, `useEffect`)
- ✅ Tipagem clara e correta com **TypeScript**
- ✅ Layout **moderno e responsivo** com Tailwind CSS
- ✅ Boa **experiência do usuário (UX)**
- ✅ Código **organizado, limpo e legível**
