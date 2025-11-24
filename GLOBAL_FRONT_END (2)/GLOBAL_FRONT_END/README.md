# BILI.AI - Inteligência Artificial para o Futuro dos Negócios

![Status](https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-yellow?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
# BILI.AI - Inteligência Artificial para o Futuro dos Negócios

![Status](https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-yellow?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> **Plataforma SaaS para democratização de Inteligência Artificial e análise de perfis trabalhistas com bases nas hardskills dos participantes**

---

## 📋 Sumário

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Status do Projeto](#-status-do-projeto)
3. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
4. [Instalação](#-instalação)
5. [Como Usar](#-como-usar)
6. [Estrutura de Pastas](#-estrutura-de-pastas)
7. [Endpoints e Rotas](#-endpoints-ou-rotas-principais)
8. [Demonstração Visual](#-screenshots--demonstração)
9. [Autores e Créditos](#-autores-e-créditos)
10. [Contato](#-contato)

---

## 🎯 Sobre o Projeto

O **BILI.AI** é uma solução web desenvolvida para transformar dados brutos em decisões estratégicas. A arquitetura foca em **escalabilidade**, **segurança (LGPD)** e **UX**, utilizando as práticas mais recentes do ecossistema React (Server State Management e Componentização Atômica).

### Diferenciais Técnicos
* **System Theme:** Gerenciamento de tema (Dark/Light) com detecção automática via Context API.
* **Performance-first:** Build otimizado via Vite e gestão de cache com React Query.
* **Type Safety:** Tipagem estrita com TypeScript e validação de schemas com Zod.

---

## 📊 Status do Projeto

**Versão Atual:** `1.0.0-beta`

| Funcionalidade | Status | Detalhes |
| :--- | :---: | :--- |
| **Design System** | ✅ | Base de componentes UI, tipografia e paleta responsiva. |
| **Theming Engine** | ✅ | Persistência local e toggle manual/automático. |
| **Landing Page** | ✅ | Hero, Features e About sections implementadas. |
| **Autenticação** | 🔄 | Estrutura de rotas privadas em desenvolvimento. |
| **Dashboard** | 🔄 | Integração com APIs de ML e visualização de dados. |

---

## 🛠 Tecnologias Utilizadas

| Camada | Tecnologias e Bibliotecas |
| :--- | :--- |
| **Core** | React 18.3.1, TypeScript 5.0+, Vite |
| **Interface (UI)** | Tailwind CSS 3.4, Radix UI, Lucide React, CVA |
| **State & Data** | React Query v5 (Server State), Context API (App State) |
| **Qualidade & QA** | ESLint, Zod, React Hook Form |

---

## 💻 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

**Pré-requisitos:**
* Node.js (v18 ou superior)
* Gerenciador de pacotes (npm ou yarn)

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/bili-ai.git](https://github.com/seu-usuario/bili-ai.git)

# 2. Entre no diretório do projeto
cd bili-ai

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Configure as variáveis de ambiente (se necessário)
cp .env.example .env

🎮 Como Usar
Após a instalação, utilize os comandos abaixo para manipular o sistema:

# Iniciar o servidor de desenvolvimento (Hot Reload)
npm run dev

# Criar versão de produção (Build otimizado)
npm run build

# Pré-visualizar a versão de produção
npm run preview

🏗️ Estrutura de Pastas
O projeto segue uma arquitetura Feature-based para facilitar a manutenção:
src/
├── components/         # Componentes de UI genéricos (Atomic Design)
│   ├── ui/             # Elementos base (Button, Card, Input - shadcn/ui)
│   ├── layout/         # Estruturas globais (Header, Footer)
│   └── common/         # Widgets reutilizáveis (ThemeToggle)
├── contexts/           # Gerenciamento de estado global (ThemeContext)
├── features/           # Lógica de negócio isolada por domínio
│   ├── dashboard/      # Componentes e ganchos do dashboard
│   └── landing/        # Seções da página inicial
├── hooks/              # Abstrações de lógica (useMobile, useToast)
├── lib/                # Configurações de infraestrutura (Axios, Utils)
└── pages/              # Definição de rotas e composição

🛣️ Endpoints ou Rotas Principais
ROTA - "/" - COMPONENTE - "LandingPage" - DESCRIÇÃO - "Página inicial institucional e conversão." - ACESSO - "PÚBLICO"
ROTA - "/login" - COMPONENTE - "AuthPage" - DESCRIÇÃO - "Interface de autenticação e registro.." - ACESSO - "PÚBLICO"
ROTA - "/dashboard" - COMPONENTE - "dashboard" - DESCRIÇÃO - "Área logada com visualização de dados." - ACESSO - "Privado (Auth)"
ROTA - "/settings" - COMPONENTE - "dashbSettingsPageoard" - DESCRIÇÃO - "Configurações de conta e preferências." - ACESSO - "Privado (Auth)""Privado (Auth)"

📸 Screenshots / Demonstração

👥 Autores e Créditos

Projeto desenvolvido pela equipe 1TDSPY de Análise e Desenvolvimento de Sistemas:

João Victor Vendramto - RM  563665  - Link Github: @joaovendrameto05 - Link Linkedin: www.linkedin.com/in/joao-victor-vendrameto

Yuri Barreto Garzoli - RM - Link Github: - Link Linkedin:

Rafael Fernandes - RM - Link Github: - Link Linkedin:

📞 Contato

Para suporte técnico ou dúvidas sobre a implementação:
• Email Institucional: contato@bili.ai
• Repositório: 

3- EDITAR O STRUCTURE.MD 
COALR CÓDIGO:
## 🎯 Visão Geral da Organização
Este documento detalha a estrutura de pastas e arquivos do projeto, explicando a responsabilidade de cada parte e as convenções utilizadas.

## 📁 Estrutura Detalhada

### `/src/components/`

Todos os componentes React estão organizados em subpastas por categoria:

#### `layout/` - Componentes de Layout

Componentes estruturais que definem o layout principal da aplicação.

- **Header.tsx** - Cabeçalho fixo com navegação e controles

- **Footer.tsx** - Rodapé com informações de contato e equipe

- **index.ts** - Barrel export para facilitar importações

```tsx

// Importação facilitada via barrel export

import { Header, Footer } from "@/components/layout";

```

#### `features/` - Componentes de Funcionalidades

Componentes específicos de features e seções da aplicação.
- **Hero.tsx** - Seção hero da página inicial

- **Features.tsx** - Grid de recursos/features do produto

- **About.tsx** - Seção "Sobre" com informações da empresa

- **index.ts** - Barrel export

```tsx

// Exemplo de uso

import { Hero, Features, About } from "@/components/features";

```
#### `common/` - Componentes Comuns

Componentes reutilizáveis que podem ser usados em qualquer parte da aplicação.

- **ThemeToggle.tsx** - Toggle para alternar entre dark/light mode

- **index.ts** - Barrel export

```tsx

// Importação

import { ThemeToggle } from "@/components/common";

```
#### `ui/` - Componentes Base (shadcn/ui)

Componentes de UI primitivos e reutilizáveis baseados no shadcn/ui.

Exemplos:
- button.tsx
- card.tsx
- dialog.tsx
- input.tsx
- toast.tsx
- etc.

```tsx

// Sempre importar com @/components/ui

import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
```
---
### `/src/contexts/`
Context providers para gerenciamento de estado global.

#### `ThemeContext.tsx`
Gerencia o tema (dark/light/system) da aplicação usando Context API.

**Exports:**
- `ThemeProvider` - Provider component
- `useTheme` - Hook para acessar o contexto

**Uso:**
```tsx
// No App.tsx
<ThemeProvider>
  {/* app */}
</ThemeProvider>

// Em qualquer componente
import { useTheme } from "@/contexts/ThemeContext";

function Component() {
  const { theme, setTheme, actualTheme } = useTheme();
}
```
---

### `/src/pages/`

Componentes de página que representam rotas completas.
- **Index.tsx** - Página principal (/)

- **NotFound.tsx** - Página 404 (*)

---
### `/src/hooks/`
Custom hooks reutilizáveis.

- **use-mobile.tsx** - Hook para detectar se está em dispositivo móvel
- **use-toast.ts** - Hook para sistema de notificações toast

---
### `/src/lib/`

Funções utilitárias e helpers.
- **utils.ts** - Funções auxiliares (ex: `cn()` para merge de classes)
---

### `/src/assets/`
Recursos estáticos como imagens, fontes, etc.

- **hero-bg.jpg** - Imagem de background do hero
- Adicione outros assets aqui

**Importante:** Sempre importe assets usando `@/assets/`:
```tsx
import heroImage from "@/assets/hero-bg.jpg";

```
---
## 🎨 Design System
### `/src/index.css`
Define todo o design system usando variáveis CSS:
- Cores (HSL) para light/dark mode
- Tokens customizados (gradientes, sombras, etc.)
- Estilos base do Tailwind

**Tokens Importantes:**
```css
:root {
  --primary: 217 91% 60%;
  --foreground: 217 33% 17%;
  --background: 0 0% 100%;
  /* ... */
/* Custom tokens */
  --blue-glow: 217 91% 60%;
  --gradient-primary: linear-gradient(...);
  --shadow-blue: 0 10px 40px -10px ...;
}

```
### `/tailwind.config.ts`
Configuração do Tailwind CSS que mapeia as variáveis CSS:
```ts
colors: {
  primary: "hsl(var(--primary))",
  foreground: "hsl(var(--foreground))",
  "blue-glow": "hsl(var(--blue-glow))",

  // ...
}

```
---
## 🔧 Arquivos de Configuração Raiz
 **vite.config.ts** - Configuração do Vite (build, dev server, plugins)
- **tsconfig.json** - Configuração TypeScript
- **eslint.config.js** - Regras de linting
- **components.json** - Configuração shadcn/ui
- **package.json** - Dependências e scripts

---

## 📝 Convenções de Código
### Imports
Sempre use alias `@/` para imports:
```tsx

// ✅ Correto
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

// ❌ Evitar
import { Button } from "../../components/ui/button";

```
### Componentes

- Use PascalCase para nomes de componentes
- Um componente por arquivo
- Export named quando possível
```tsx
// Header.tsx
export const Header = () => {
  // ...
};

```
### Barrel Exports
Use arquivos `index.ts` para simplificar imports:
```ts
// components/layout/index.ts
export { Header } from "./Header";
export { Footer } from "./Footer";
```
### Estilos
- Use tokens do design system (variáveis CSS)
- Evite cores hardcoded
- Prefira classes do Tailwind usando os tokens
```tsx

// ✅ Correto - usa token
<div className="bg-primary text-primary-foreground" />
// ❌ Evitar - cor hardcoded
<div className="bg-blue-500 text-white" />

```
---
## 🚀 Próximos Passos

Ao adicionar novos componentes, siga estas diretrizes:
1. **Layout components** → `/src/components/layout/`
2. **Feature components** → `/src/components/features/`
3. **Reusable components** → `/src/components/common/`
4. **Base UI components** → `/src/components/ui/`
5. **Pages** → `/src/pages/`
6. **Contexts** → `/src/contexts/`
7. **Hooks** → `/src/hooks/`
8. **Utils** → `/src/lib/`
Sempre atualize o arquivo `index.ts` (barrel export) correspondente quando adicionar novos componentes!
---
## 📚 Recursos
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite Guide](https://vitejs.dev/guide/)