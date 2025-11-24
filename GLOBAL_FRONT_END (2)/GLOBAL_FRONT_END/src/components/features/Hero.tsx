import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Inteligência Artificial do Futuro</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 md:text-6xl lg:text-7xl">
          Descrubra o que você tem de melhor com {" "}
          <span className="bg-gradient-to-r from-primary to-blue-light bg-clip-text text-transparent">
            BILI.AI
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 md:text-xl">
          Soluções inovadoras de inteligência artificial para transformar sua carreira e impulsionar seu sucesso.
        </p>

        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 sm:flex-row">
          <Button size="lg" className="group gap-2 shadow-lg transition-all hover:shadow-[var(--shadow-blue)]">
            Começar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Precisão</div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Usuários atendidos</div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};