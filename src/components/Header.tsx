import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +227 XX XX XX XX
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              maintenanceproservice067@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Niamey, Niger
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-primary text-white p-3 rounded-lg mr-3">
                <span className="text-xl font-bold">MPS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">MAINTENANCEPROSERVICE</h1>
                <p className="text-sm text-muted-foreground">Solutions Techniques Professionnelles</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-foreground hover:text-primary transition-smooth"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('rdv')} 
                className="text-foreground hover:text-primary transition-smooth"
              >
                Rendez-vous
              </button>
              <button 
                onClick={() => scrollToSection('apropos')} 
                className="text-foreground hover:text-primary transition-smooth"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection('rdv')} className="btn-accent">
                Prendre RDV
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('accueil')} 
                  className="text-left py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-left py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('rdv')} 
                  className="text-left py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Rendez-vous
                </button>
                <button 
                  onClick={() => scrollToSection('apropos')} 
                  className="text-left py-2 text-foreground hover:text-primary transition-smooth"
                >
                  À propos
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </button>
                <Button onClick={() => scrollToSection('rdv')} className="btn-accent w-fit">
                  Prendre RDV
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;