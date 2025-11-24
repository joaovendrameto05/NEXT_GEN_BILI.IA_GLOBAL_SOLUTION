import { Brain, Zap, Shield, TrendingUp, Users, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "IA Avançada",
    description: "Tecnologia de machine learning de última geração para análises precisas e insights valiosos.",
  },
  {
    icon: Zap,
    title: "Processamento Rápido",
    description: "Respostas em tempo real com processamento otimizado para máxima eficiência.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção de dados com criptografia end-to-end e compliance com LGPD.",
  },
  {
    icon: TrendingUp,
    title: "Análise Preditiva",
    description: "Previsões precisas baseadas em dados históricos e tendências de mercado.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Ferramentas integradas para trabalho em equipe e compartilhamento de insights.",
  },
  {
    icon: Cpu,
    title: "Automação Inteligente",
    description: "Automatize tarefas repetitivas e foque no que realmente importa.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Recursos poderosos que impulsionam seu Sucesso
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubra como o BILI.AI pode revolucionar sua carreira com nossas funcionalidades inovadoras.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};