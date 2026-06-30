# 🎬 Studio Ghibli Animations App

Uma aplicação web responsiva que consome a API do Studio Ghibli para listar, detalhar e favoritar as animações de um dos maiores estúdios do Japão. 

O projeto foi estruturado utilizando conceitos modernos de gerenciamento de estado global e tipagem estática no ecossistema do React.

---

## 🧠 O que aprendi neste projeto

Neste exercício, consolidei conceitos fundamentais de desenvolvimento Front-end avançado com React e TypeScript, além de solucionar desafios reais de compatibilidade de ecossistema:

### 1. Gerenciamento de Estado Global com Context API
*   Criação e estruturação de contextos centralizados (`Context` e `Provider`) para compartilhamento de dados sem *prop drilling*.
*   Uso integrado dos React Hooks `useState`, `useEffect` para requisições assíncronas e `useContext` para consumir o estado global em páginas distintas (`Home` e `Favorites`).

### 2. Consumo de APIs e Sincronização
*   Consumo de dados de endpoints externos de forma eficiente, garantindo que o ciclo de vida do componente (`useEffect`) realize apenas **uma única chamada** controlada à API.
*   Implementação de lógica de persistência e filtragem de arrays para favoritar e desfavoritar itens sem duplicação de dados.

### 3. Solução de Conflitos de Dependências (Legacy & Engines)
*   **Resolução de conflitos de Peer Dependencies:** Gerenciamento e atualização de pacotes legados quebrados por atualizações automatizadas (como as disparadas pelo Dependabot).
*   **Ajuste de ambientes com NVM:** Configuração de conciliação de versões de motores entre o Node.js e ferramentas modernas de build como o Vite 6.

---

## 🛠️ Tecnologias Utilizadas

*   **React** com **TypeScript**
*   **Vite** & **SWC** (Ambiente de desenvolvimento rápido)
*   **Context API & React Hooks** (`useState`, `useEffect`, `useContext`)
*   **React Router** (Navegação dinâmica entre Home e Favoritos)
*   **React Testing Library (RTL) & Jest** (Testes de comportamento de componentes)
*   **ESLint / StyleLint** (Garantia de código limpo e padronizado)

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar o Repositório e Acessar a Pasta
```bash
git clone git@github.com:tryber/sd-040-exercise-ghibli-animations-ts.git
cd sd-040-exercise-ghibli-animations-ts
npm install -D @vitejs/plugin-react-swc@latest --legacy-peer-deps
npm run dev
```