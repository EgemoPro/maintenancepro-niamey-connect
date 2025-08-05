import { Users, Award, Clock, ThumbsUp, Wrench, Target } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      value: "5+",
      label: "Années d'expérience"
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-accent" />,
      value: "500+",
      label: "Clients satisfaits"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      value: "24h",
      label: "Support disponible"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      value: "100%",
      label: "Qualité garantie"
    }
  ];

  const values = [
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Expertise Technique",
      description: "Notre équipe maîtrise les dernières technologies et techniques de maintenance pour tous types d'équipements."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Réactivité",
      description: "Intervention rapide et efficace pour minimiser l'impact des pannes sur votre activité."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Précision",
      description: "Diagnostic précis et solutions durables adaptées à vos besoins spécifiques."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            À Propos de Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MAINTENANCEPROSERVICE, votre partenaire de confiance pour la maintenance 
            industrielle et technique à Niamey depuis plus de 5 ans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Notre Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fondée avec la vision de fournir des services de maintenance de qualité supérieure, 
              MAINTENANCEPROSERVICE s'est imposée comme une référence dans le domaine de la 
              maintenance industrielle, électronique et technique au Niger.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Notre équipe d'experts qualifiés intervient sur tous types d'équipements : 
              groupes électrogènes, climatiseurs, systèmes informatiques, bornes de paiement, 
              et bien plus encore. Nous combinons expertise technique et service client 
              exceptionnel pour garantir la satisfaction de nos clients.
            </p>
            
            <div className="bg-gradient-primary text-white p-6 rounded-lg shadow-industrial">
              <h4 className="font-semibold mb-2">Notre Engagement</h4>
              <p className="text-white/90">
                Offrir des solutions de maintenance fiables, rapides et économiques 
                pour assurer la continuité de vos activités.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="service-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="service-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-secondary/50 p-8 rounded-2xl text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Informations Légales
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-primary mb-2">Raison Sociale</h4>
              <p className="text-muted-foreground">MAINTENANCEPROSERVICE</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">NIF</h4>
              <p className="text-muted-foreground">127617/P</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Localisation</h4>
              <p className="text-muted-foreground">Niamey, Niger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;