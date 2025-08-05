import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-accent text-accent-foreground p-3 rounded-lg mr-3">
                <span className="text-xl font-bold">MPS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MAINTENANCEPROSERVICE</h3>
                <p className="text-primary-foreground/80 text-sm">Solutions Techniques Professionnelles</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Votre partenaire de confiance pour la maintenance industrielle, électronique et technique 
              à Niamey. Une expertise reconnue au service de votre activité depuis plus de 5 ans.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('accueil');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('rdv');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Prendre RDV
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('apropos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">+227 92220761</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90 text-sm">maintenanceproservice067@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">Niamey, Niger</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} MAINTENANCEPROSERVICE. Tous droits réservés.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="text-primary-foreground/80">NIF: 127617/P</span>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Mentions légales
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;