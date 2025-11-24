## 🎯 Visão Geral da Organização

Este documento detalha a estrutura de pastas e arquivos do projeto, explicando a responsabilidade de cada parte e as convenções utilizadas.

---

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

- **vite.config.ts** - Configuração do Vite (build, dev server, plugins)
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