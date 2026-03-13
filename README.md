# 📝 Zync Finance
Zync Finance é uma aplicação frontend desenvolvida para gerenciamento e acompanhamento de finanças.

## 🚀 Tecnologias

**React**: Biblioteca JavaScript focada na construção de interfaces de usuário dinâmicas.

**Vite**: Ferramenta de build super rápida e otimizada para ecossistemas web modernos.

**Tailwind CSS**: Framework CSS utilitário para uma estilização rápida flexível e responsiva.

**Shadcn UI**: Componentes completamente acessíveis para a construção do design system e da interface.

**React Query**: Gerenciamento integrado e inteligente de fetch, cache e atualização de dados assíncronos.

**React Hook Form & Zod**: Criação de formulários performáticos em conjunto com uma validação rigorosa de schemas de dados.

**React Router**: Gerenciamento de rotas fluído e declarativo para a navegação SPA.

**Husky**: Orquestração de Git Hooks para garantir que código sem qualidade seja barrado de entrar no repositório.

## 📁 Estrutura do Projeto

```
.husky/           # Scripts para Git Hooks (pre-commit, commit-msg)
public/           # Arquivos estáticos servidos diretamente
src/
├── api/          # Módulos para comunicação base com APIs
├── assets/       # Imagens e recursos estáticos globais
├── components/   # Componentes visuais reusáveis da interface
├── constant/     # Variáveis com valores puramente constantes
├── contexts/     # Provedores de estado global com React Context
├── form/         # Componentes especializados em captação de dados/formulários
├── helpers/      # Funções utilitárias e ajudantes transversais
├── lib/          # Configuração, inicialização e helpers de bibliotecas externas
├── pages/        # Componentes que representam as telas da aplicação (Rotas)
├── services/     # Abstração de lógicas e interações principais
```

## 🗺️ Explorando o código

- Aplicação distribuída com forte separação de conceitos entre **pages**, **components** e **services**, elevando a modularidade.
- Adoção de padrões de **lib wrappers**, garantindo que as dependências externas sejam inicializadas em um só local (como o diretório `lib/`), reduzindo alto acoplamento em todo o repositório.
- Gerenciamento inteligente e otimizado de carregamento de dados e requições de rede através do **React Query**, removendo a necessidade excessiva de states e effects complexos.
- Validação robusta guiada por **Zod schemas** diretamente interligados ao **React Hook Form**, facilitando a captura de erros e comunicação direta de feedback para o usuário final.
- Ferramenta de roteamento configurada para facilitar layouts consistentes em toda a navegação transparente da plataforma.

## 🔍 Qualidade do código 

- Utilização rigorosa do **ESLint** apoiado por plugins do Ecossistema React para capturar falhas de padrão na escrita e garantir uma governança saudável do código.
- Automação da padronização rítmica do código através do **Prettier** (+ plugins Tailwind).
- Prevenção ativa e sólida usando o **Husky** com o **lint-staged**, executando análises em tempo real para os arquivos que compõem o commit e bloqueando ações incompletas.
- Validação no próprio texto das mensagens do git garantida pela ferramenta **git-commit-msg-linter**.

## 📦 Como rodar localmente 

**Clonar projeto**

```bash
git clone https://github.com/VinicyosFerreira/zynk-finance
```

**Acessar pasta**

```bash
cd zynk-finance
```

**Instalar dependências**

```bash
npm install
```

**Rodar projeto localmente**

```bash
npm run dev
```

## 🔗 Links 

**Código Fonte** [Confira o código fonte]
https://github.com/VinicyosFerreira/zynk-finance
