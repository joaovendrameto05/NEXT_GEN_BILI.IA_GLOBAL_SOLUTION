import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Sobre o BILI.AI
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              A BILI.IA, desenvolvida pela startup NEXT GEN, nasceu para corrigir uma falha crítica: o recrutamento tradicional focado apenas em hard-skills (palavras-chave) que ignora grandes talentos. Decidimos substituir o "achismo" por dados reais.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Tecnologia com Propósito: não somos apenas um software; somos um ecossistema SaaS híbrido. Utilizamos Inteligência Artificial e Machine Learning para mapear o que realmente importa: a vocação, o potencial e as soft-skills do profissional, ignorando o ruído de currículos inflados.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Diferencial: Enquanto o mercado briga por orçamentos milionários, nós trazemos a estratégia "Moneyball para RH" para as Pequenas e Médias Empresas (PMEs), focando na vocação da pessoal que está se desenvolvendo dentro do programa e na acessibilidade, oferecendo inteligência de dados a um custo que cabe no orçamento.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Transparência e Compromisso: nossa relação é baseada em confiança. Garantimos níveis de serviço (SLA) claros e um suporte consultivo focado no Sucesso do Cliente. Nossa IA é desenhada para ser um mentor empático, tratando cada usuário como um ser humano em evolução, e não como um dado em uma planilha.
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent p-8">
              <div className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">2025</div>
                  <div className="text-sm text-muted-foreground">Fundação</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">AI Assistente Pessoal+</div>
                  <div className="text-sm text-muted-foreground">Clientes Ativos</div>
                </div>
                                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Ativos</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">Compromisso e transparência</div>
                  <div className="text-sm text-muted-foreground">Especialistas em IA</div>
                </div>
                                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-2 text-3xl font-bold text-primary">Melhora contínua</div>
                  <div className="text-sm text-muted-foreground">Atualizações constantes</div>
                </div>
              </div>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-light/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};