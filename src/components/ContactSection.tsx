import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi (remplacer par votre service d'email)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons dans les plus brefs délais.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Téléphone",
      value: "+227 XX XX XX XX",
      description: "Disponible 7j/7"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      value: "maintenanceproservice067@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Adresse",
      value: "Niamey, Niger",
      description: "Zone d'intervention étendue"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Horaires",
      value: "Lun - Sam: 8h - 18h",
      description: "Urgences 24h/24"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contactez-Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un problème technique ? Notre équipe est là pour vous aider. 
            Contactez-nous dès maintenant !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-primary mb-8">
              Informations de Contact
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="service-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="bg-gradient-accent p-6 rounded-lg text-center shadow-industrial">
              <h4 className="font-bold text-accent-foreground mb-4">
                Besoin d'aide immédiate ?
              </h4>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3"
                onClick={() => window.open('https://wa.me/227XXXXXXXX', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contacter via WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+227 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre demande..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-industrial w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-scale-in">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center text-primary">Notre Zone d'Intervention</CardTitle>
              <CardDescription className="text-center">
                Nous intervenons dans toute la région de Niamey et ses environs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Niamey, Niger</h4>
                  <p className="text-muted-foreground">
                    Intervention dans toute la ville et les communes environnantes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;