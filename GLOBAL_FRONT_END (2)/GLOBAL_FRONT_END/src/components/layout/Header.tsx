import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-xl font-bold text-foreground">BILI.AI</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Início
          </a>
          <a href="#features" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Recursos
          </a>
          <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Sobre
          </a>
          <a href="#team" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Equipe
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button size="sm" className="hidden md:inline-flex">
            Começar
          </Button>
        </div>
      </div>
    </header>
  );
};