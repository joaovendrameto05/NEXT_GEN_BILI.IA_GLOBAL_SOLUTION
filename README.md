# BILI.AI - Inteligência Artificial para o Futuro dos Negócios

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

> Plataforma inovadora de inteligência artificial que transforma dados em decisões estratégicas

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Status do Projeto](#status-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Endpoints ou Rotas Principais](#endpoints-ou-rotas-principais)
- [Capturas de tela / Demonstração](#capturas-de-tela--demonstração)
- [Autores e Créditos](#autores-e-créditos)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

O **BILI.AI** é uma plataforma web moderna que democratiza o acesso à inteligência artificial de ponta, tornando-a acessível e útil para empresas de todos os tamanhos. Nossa solução combina tecnologia avançada de machine learning com uma interface intuitiva e elegante.

### Características Principais:

- 🤖 **IA Avançada**: Tecnologia de machine learning de última geração
- ⚡ **Processamento Rápido**: Respostas em tempo real com alta performance
- 🛡️ **Segurança Total**: Criptografia end-to-end e compliance com LGPD
- 📊 **Análise Preditiva**: Previsões precisas baseadas em dados históricos
- 👥 **Colaboração**: Ferramentas integradas para trabalho em equipe
- 🔄 **Automação Inteligente**: Automatização de tarefas repetitivas

### Diferenciais:

- **Design Limpo e Profissional**: Interface moderna com foco em UX/UI
- **Dark/Light Mode**: Sistema completo de temas com detecção automática de preferências do sistema
- **Responsivo**: Experiência otimizada para todos os dispositivos
- **Performance**: Otimização avançada com Vite e React 18

---

## 📊 Status do Projeto

🚧 **Em Desenvolvimento Ativo** 🚧

### Versão Atual: `1.0.0-beta`

**Funcionalidades Implementadas:**
- ✅ Interface principal com hero section
- ✅ Seção de recursos e features
- ✅ Página sobre o projeto
- ✅ Sistema de Dark/Light Mode com Context API
- ✅ Design system completo
- ✅ Responsividade mobile-first

**Próximas Implementações:**
- 🔄 Sistema de autenticação
- 🔄 Dashboard administrativo
- 🔄 Integração com APIs de IA
- 🔄 Área do cliente

---

## 🚀 Tecnologias Utilizadas

### Core Stack

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | 18.3.1 | Biblioteca JavaScript para construção de interfaces |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Superset JavaScript com tipagem estática |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | 5.0+ | Build tool e dev server de alta performance |

### UI & Styling

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white) | 3.4+ | Framework CSS utility-first |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radix-ui&logoColor=white) | Latest | Componentes acessíveis e sem estilo |
| ![Lucide React](https://img.shields.io/badge/Lucide-F56565?logo=lucide&logoColor=white) | 0.462+ | Biblioteca de ícones |

### State Management & Data

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![React Query](https://img.shields.io/badge/React_Query-FF4154?logo=react-query&logoColor=white) | 5.83+ | Gerenciamento de estado servidor |
| Context API | Built-in | Gerenciamento de estado global (Tema) |

### Ferramentas de Desenvolvimento

- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de schemas
- **ESLint**: Linting e qualidade de código
- **Class Variance Authority**: Variantes de componentes
- **CLSX & Tailwind Merge**: Utilitários CSS

---

## 💻 Instalação

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js**: versão 18.0 ou superior ([Download](https://nodejs.org/))
- **npm** ou **yarn**: gerenciador de pacotes

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/bili-ai.git
cd bili-ai
```

2. **Instale as dependências**

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

3. **Configure as variáveis de ambiente** (opcional)

```bash
cp .env.example .env
```

4. **Inicie o servidor de desenvolvimento**

```bash
# Usando npm
npm run dev

# Ou usando yarn
yarn dev
```

5. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:8080`

---

## 🎮 Como Usar

### Navegação Principal

1. **Página Inicial**: Apresenta o hero section com informações principais
2. **Recursos**: Explore as funcionalidades da plataforma
3. **Sobre**: Conheça mais sobre o BILI.AI
4. **Contato**: Informações da equipe e formas de contato

### Sistema de Temas

O BILI.AI possui um sistema completo de Dark/Light Mode:

- **Toggle Manual**: Clique no ícone de sol/lua no header para alternar
- **Detecção Automática**: Ao acessar pela primeira vez, o tema se adapta às suas preferências do sistema
- **Persistência**: Sua escolha é salva localmente e mantida entre sessões

### Para Desenvolvedores

```typescript
// Usando o hook de tema em seus componentes
import { useTheme } from "@/contexts/ThemeContext";

function MeuComponente() {
  const { theme, setTheme, actualTheme } = useTheme();
  
  // theme: "light" | "dark" | "system"
  // actualTheme: "light" | "dark" (tema efetivamente aplicado)
  // setTheme: função para alterar o tema
}
```

---

## 📁 Estrutura de Pastas

```
bili-ai/
├── public/                 # Arquivos estáticos
│   ├── robots.txt         # Configuração para crawlers
│   └── favicon.ico        # Ícone da aplicação
│
├── src/
│   ├── assets/            # Recursos estáticos (imagens, fontes)
│   │   └── hero-bg.jpg    # Imagem do hero
│   │
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/           # Componentes base (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── Header.tsx    # Cabeçalho da aplicação
│   │   ├── Hero.tsx      # Seção hero
│   │   ├── Features.tsx  # Seção de recursos
│   │   ├── About.tsx     # Seção sobre
│   │   ├── Footer.tsx    # Rodapé
│   │   └── ThemeToggle.tsx # Toggle de tema
│   │
│   ├── contexts/         # Contextos React
│   │   └── ThemeContext.tsx # Context API para temas
│   │
│   ├── hooks/            # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/              # Utilitários
│   │   └── utils.ts      # Funções auxiliares
│   │
│   ├── pages/            # Páginas da aplicação
│   │   ├── Index.tsx     # Página principal
│   │   └── NotFound.tsx  # Página 404
│   │
│   ├── App.tsx           # Componente raiz
│   ├── main.tsx          # Entry point
│   ├── index.css         # Estilos globais e design system
│   └── vite-env.d.ts     # Tipos Vite
│
├── index.html            # Template HTML
├── tailwind.config.ts    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
├── package.json          # Dependências e scripts
└── README.md            # Documentação (este arquivo)
```

### Organização de Componentes

- **`/components/ui`**: Componentes base do design system (botões, cards, inputs)
- **`/components`**: Componentes específicos da aplicação (Header, Hero, Features)
- **`/contexts`**: Gerenciamento de estado global com Context API
- **`/hooks`**: Lógica reutilizável extraída em custom hooks
- **`/pages`**: Componentes de página (rotas)

---

## 🛣️ Endpoints ou Rotas Principais

### Rotas Frontend

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | `Index.tsx` | Página principal com todas as seções |
| `*` | `NotFound.tsx` | Página 404 para rotas não encontradas |

### Seções da Página Principal (Âncoras)

| Âncora | ID | Descrição |
|--------|-----|-----------|
| `#home` | Hero Section | Seção inicial com CTA principal |
| `#features` | Features | Recursos e funcionalidades |
| `#about` | About | Informações sobre o projeto |
| `#contact` | Footer | Informações de contato |

### API Endpoints (Futuro)

*A ser implementado na próxima fase:*

- `POST /api/auth/login` - Autenticação de usuários
- `GET /api/analytics` - Dados de análise
- `POST /api/ai/predict` - Endpoint de predição IA

---

## 📸 Capturas de tela / Demonstração

### Modo Claro (Light Mode)

![Hero Section - Light Mode](docs/screenshots/hero-light.png)
*Hero section com design limpo e profissional em modo claro*

![Features Section - Light Mode](docs/screenshots/features-light.png)
*Seção de recursos destacando as principais funcionalidades*

### Modo Escuro (Dark Mode)

![Hero Section - Dark Mode](docs/screenshots/hero-dark.png)
*Hero section em modo escuro com alto contraste*

![Features Section - Dark Mode](docs/screenshots/features-dark.png)
*Recursos em modo escuro com paleta azul otimizada*

### Responsividade

![Mobile View](docs/screenshots/mobile.png)
*Experiência mobile otimizada*

---

## 👥 Autores e Créditos

### Equipe de Desenvolvimento

Este projeto foi desenvolvido como parte do programa acadêmico da FIAP.

**Agradecimentos Especiais:**
- Professores e orientadores da FIAP
- Comunidade React e Vite
- Contribuidores open-source das bibliotecas utilizadas

---

## 📞 Contato

### Integrantes da Equipe

#### João Silva
- **RM**: 123456
- **Turma**: 1TDSPS
- **Email**: joao.silva@example.com
- **GitHub**: [@joaosilva](https://github.com/joaosilva)
- **LinkedIn**: [João Silva](https://linkedin.com/in/joaosilva)

#### Maria Santos
- **RM**: 789012
- **Turma**: 1TDSPS
- **Email**: maria.santos@example.com
- **GitHub**: [@mariasantos](https://github.com/mariasantos)
- **LinkedIn**: [Maria Santos](https://linkedin.com/in/mariasantos)

#### Pedro Costa
- **RM**: 345678
- **Turma**: 1TDSPS
- **Email**: pedro.costa@example.com
- **GitHub**: [@pedrocosta](https://github.com/pedrocosta)
- **LinkedIn**: [Pedro Costa](https://linkedin.com/in/pedrocosta)

### Informações do Projeto

- **Website**: [bili.ai](https://bili.ai)
- **Email**: contato@bili.ai
- **Telefone**: (11) 9999-9999
- **Endereço**: São Paulo, SP - Brasil

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

<div align="center">

**Desenvolvido com ❤️ pela equipe BILI.AI**

[⬆ Voltar ao topo](#biliai---inteligência-artificial-para-o-futuro-dos-negócios)

</div>
