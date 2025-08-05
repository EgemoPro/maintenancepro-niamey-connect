import { ArrowRight, CheckCircle, Wrench, Monitor, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions de
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Maintenance
              </span>
              Professionnelle
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              MAINTENANCEPROSERVICE - Votre partenaire de confiance pour la maintenance industrielle, 
              électronique et technique à Niamey. Excellence, rapidité et professionnalisme garantis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('rdv')}
                className="btn-accent text-lg px-8 py-4 group"
              >
                Prendre Rendez-vous
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
              >
                Nos Services
              </Button>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Intervention Rapide</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Équipe Qualifiée</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Prix Compétitifs</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="service-card bg-white/10 backdrop-blur-sm border border-white/20 text-white animate-bounce-in">
                <Wrench className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Maintenance Industrielle</h3>
                <p className="text-white/80">Groupes électrogènes, pompes, climatiseurs</p>
              </div>
              
              <div className="service-card bg-white/10 backdrop-blur-sm border border-white/20 text-white animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <Monitor className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Maintenance Électronique</h3>
                <p className="text-white/80">PC, imprimantes, bornes de paiement</p>
              </div>
              
              <div className="service-card bg-white/10 backdrop-blur-sm border border-white/20 text-white animate-bounce-in col-span-2" style={{animationDelay: '0.4s'}}>
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Support Technique 24/7</h3>
                <p className="text-white/80">Assistance rapide et personnalisée pour tous vos équipements</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;