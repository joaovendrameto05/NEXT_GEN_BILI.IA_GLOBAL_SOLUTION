import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { Features } from "@/components/features/Features";
import { About } from "@/components/features/About";
import { Team } from "@/components/features/Team"; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Team /> 
      </main>
      <Footer />
    </div>
  );
};

export default Index;