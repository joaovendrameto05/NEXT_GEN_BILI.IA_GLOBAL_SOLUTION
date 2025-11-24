import { Github, Linkedin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "João Victor Vendrameto",
    role: "RM 563665 - Turma 1TDSPY",
    image: "https://github.com/joaovendrameto05.png", 
    github: "https://github.com/joaovendrameto05",
    linkedin: "https://www.linkedin.com/in/joao-victor-vendrameto",
  },
  {
    name: "Yuri Barreto Garzoli",
    role: "RM 561450 - Turma 1TDSPY",
    image: "https://github.com/Yurifgb06.png", 
    github: "https://github.com/Yurifgb06",
    linkedin: "https://www.linkedin.com/in/yurifgb",
  },
];

export const Team = () => {
  return (
    <section id="team" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nossa Equipe
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Conheça os desenvolvedores por trás da inovação da BILI.IA.
          </p>
          <h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Nosso projeto foi desenvolvido por João Victor Vendrameto e Yuri Barreto Garzoli, estudantes dedicados do curso de Análise e Desenvolvimento de Sistemas na Fiap, São Paulo. 
            Gostaríamos de apresentar nosso projeto inovador, a BILI.IA, uma plataforma que utiliza inteligência artificial para ajudar as pessoas em transação de carreira ou ajudar pessoas que ainda não se encontraram no mercado.
          </p>  
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  {member.name}
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent className="flex justify-center gap-4 pb-8">
                <Button variant="outline" size="icon" asChild>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};