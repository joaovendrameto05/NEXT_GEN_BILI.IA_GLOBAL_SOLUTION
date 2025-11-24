import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">BILI.AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando o futuro dos das pessoas com  seu assistente pessoal em desenvolver o seu melhor.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Início
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contato@bili.ai
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (11) 98765-4321
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Equipe</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-sm font-medium text-foreground">João Victor Vendrameto </div>
              </li>
              <li>
                <div className="text-sm font-medium text-foreground">Yuri Garzoli Barreto</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 BILI.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};