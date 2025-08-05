import { 
  Wrench, 
  Monitor, 
  Smartphone, 
  Printer, 
  Settings, 
  ShieldCheck,
  Zap,
  Wind,
  HardDrive,
  CreditCard
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Maintenance Industrielle",
      icon: <Wrench className="w-8 h-8" />,
      services: [
        {
          icon: <Zap className="w-6 h-6 text-accent" />,
          title: "Groupes électrogènes",
          description: "Entretien, réparation et installation de groupes électrogènes toutes marques"
        },
        {
          icon: <Settings className="w-6 h-6 text-accent" />,
          title: "Pompes à eau et systèmes hydrauliques",
          description: "Maintenance complète des systèmes de pompage et circuits hydrauliques"
        },
        {
          icon: <Wind className="w-6 h-6 text-accent" />,
          title: "Climatiseurs",
          description: "Installation, entretien et réparation de climatiseurs split et centralisés"
        }
      ]
    },
    {
      category: "Maintenance Électronique & Informatique",
      icon: <Monitor className="w-8 h-8" />,
      services: [
        {
          icon: <CreditCard className="w-6 h-6 text-accent" />,
          title: "Bornes de chèques",
          description: "Réparation et entretien de bornes de paiement électronique"
        },
        {
          icon: <HardDrive className="w-6 h-6 text-accent" />,
          title: "PC et ordinateurs portables",
          description: "Maintenance hardware et software, optimisation performances"
        },
        {
          icon: <Printer className="w-6 h-6 text-accent" />,
          title: "Imprimantes professionnelles",
          description: "Dépannage et maintenance d'imprimantes de tous types"
        },
        {
          icon: <Smartphone className="w-6 h-6 text-accent" />,
          title: "Téléphones toutes catégories",
          description: "Réparation de smartphones, téléphones fixes et accessoires"
        },
        {
          icon: <Monitor className="w-6 h-6 text-accent" />,
          title: "Systèmes de caisse",
          description: "Maintenance de caisses enregistreuses et périphériques"
        }
      ]
    },
    {
      category: "Services Techniques Complémentaires",
      icon: <ShieldCheck className="w-8 h-8" />,
      services: [
        {
          icon: <Settings className="w-6 h-6 text-accent" />,
          title: "Audit et diagnostic",
          description: "Évaluation complète de l'état de vos équipements"
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-accent" />,
          title: "Contrats de maintenance préventive",
          description: "Programmes d'entretien personnalisés pour éviter les pannes"
        },
        {
          icon: <Wrench className="w-6 h-6 text-accent" />,
          title: "Installation de matériel technique",
          description: "Mise en service et configuration d'équipements neufs"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions complètes de maintenance pour tous vos équipements industriels, 
            électroniques et techniques. Une expertise reconnue au service de votre activité.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="service-card bg-gradient-primary text-white mb-6">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="service-card"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (serviceIndex * 0.1)}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary text-white p-8 rounded-2xl shadow-industrial">
            <h3 className="text-2xl font-bold mb-4">Besoin d'une intervention ?</h3>
            <p className="text-white/90 mb-6">
              Notre équipe d'experts est à votre disposition pour tous vos besoins de maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('rdv');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-accent"
              >
                Prendre Rendez-vous
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-smooth"
              >
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;