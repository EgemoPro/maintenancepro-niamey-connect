import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, User, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Étape 1: Détails de la panne
  panneType: string;
  machineType: string;
  marque: string;
  modele: string;
  numeroSerie: string;
  description: string;
  
  // Étape 2: Coordonnées client
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  quartier: string;
  ville: string;
}

const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    panneType: "",
    machineType: "",
    marque: "",
    modele: "",
    numeroSerie: "",
    description: "",
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    quartier: "",
    ville: "Niamey"
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulation d'envoi email (en production, utiliser un service d'email)
    try {
      // Ici vous pouvez intégrer un service d'email comme EmailJS ou un backend
      console.log("Données du formulaire:", formData);
      
      // Simulation d'un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Votre demande de rendez-vous a été envoyée avec succès.",
      });
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

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      panneType: "",
      machineType: "",
      marque: "",
      modele: "",
      numeroSerie: "",
      description: "",
      nom: "",
      email: "",
      telephone: "",
      adresse: "",
      quartier: "",
      ville: "Niamey"
    });
  };

  if (isSubmitted) {
    return (
      <section id="rdv" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <Card className="border-accent shadow-industrial">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">Demande Envoyée !</CardTitle>
                <CardDescription>
                  Votre demande de rendez-vous a été transmise à notre équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous 
                  et discuter des détails de l'intervention.
                </p>
                <Button onClick={resetForm} className="btn-industrial">
                  Nouvelle Demande
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rdv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Prendre Rendez-vous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Décrivez votre problème en 3 étapes simples et nous vous contacterons rapidement
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-smooth
                    ${currentStep >= step 
                      ? 'bg-primary text-primary-foreground shadow-button' 
                      : 'bg-secondary text-muted-foreground'
                    }
                  `}>
                    {step === 1 && <FileText className="w-5 h-5" />}
                    {step === 2 && <User className="w-5 h-5" />}
                    {step === 3 && <Calendar className="w-5 h-5" />}
                  </div>
                  {step < 3 && (
                    <div className={`
                      w-16 h-1 mx-2 transition-smooth
                      ${currentStep > step ? 'bg-primary' : 'bg-secondary'}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <Card className="shadow-card animate-scale-in">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentStep === 1 && "Étape 1: Détails de la panne"}
                {currentStep === 2 && "Étape 2: Vos coordonnées"}
                {currentStep === 3 && "Étape 3: Confirmation"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Étape 1: Détails de la panne */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="panneType">Type de panne *</Label>
                    <Select value={formData.panneType} onValueChange={(value) => updateFormData('panneType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de panne" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="panne-electrique">Panne électrique</SelectItem>
                        <SelectItem value="panne-mecanique">Panne mécanique</SelectItem>
                        <SelectItem value="panne-electronique">Panne électronique</SelectItem>
                        <SelectItem value="maintenance-preventive">Maintenance préventive</SelectItem>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="machineType">Type de machine/appareil *</Label>
                    <Select value={formData.machineType} onValueChange={(value) => updateFormData('machineType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type d'appareil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="groupe-electrogene">Groupe électrogène</SelectItem>
                        <SelectItem value="climatiseur">Climatiseur</SelectItem>
                        <SelectItem value="pompe-eau">Pompe à eau</SelectItem>
                        <SelectItem value="ordinateur">Ordinateur/PC</SelectItem>
                        <SelectItem value="imprimante">Imprimante</SelectItem>
                        <SelectItem value="borne-paiement">Borne de paiement</SelectItem>
                        <SelectItem value="telephone">Téléphone</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="marque">Marque</Label>
                      <Input
                        id="marque"
                        value={formData.marque}
                        onChange={(e) => updateFormData('marque', e.target.value)}
                        placeholder="Ex: Samsung, HP, Caterpillar..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="modele">Modèle</Label>
                      <Input
                        id="modele"
                        value={formData.modele}
                        onChange={(e) => updateFormData('modele', e.target.value)}
                        placeholder="Modèle de l'appareil"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="numeroSerie">Numéro de série (si disponible)</Label>
                    <Input
                      id="numeroSerie"
                      value={formData.numeroSerie}
                      onChange={(e) => updateFormData('numeroSerie', e.target.value)}
                      placeholder="Numéro de série"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description du problème *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      placeholder="Décrivez en détail le problème rencontré..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {/* Étape 2: Coordonnées */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <Label htmlFor="nom">Nom complet / Raison sociale *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => updateFormData('nom', e.target.value)}
                      placeholder="Votre nom ou nom de l'entreprise"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => updateFormData('telephone', e.target.value)}
                        placeholder="+227 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="adresse">Adresse complète *</Label>
                    <Input
                      id="adresse"
                      value={formData.adresse}
                      onChange={(e) => updateFormData('adresse', e.target.value)}
                      placeholder="Numéro, rue, avenue..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quartier">Quartier *</Label>
                      <Input
                        id="quartier"
                        value={formData.quartier}
                        onChange={(e) => updateFormData('quartier', e.target.value)}
                        placeholder="Nom du quartier"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ville">Ville *</Label>
                      <Input
                        id="ville"
                        value={formData.ville}
                        onChange={(e) => updateFormData('ville', e.target.value)}
                        placeholder="Niamey"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 3: Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-4">Récapitulatif de votre demande</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div><strong>Type de panne:</strong> {formData.panneType}</div>
                      <div><strong>Appareil:</strong> {formData.machineType}</div>
                      {formData.marque && <div><strong>Marque:</strong> {formData.marque}</div>}
                      {formData.modele && <div><strong>Modèle:</strong> {formData.modele}</div>}
                      <div><strong>Description:</strong> {formData.description}</div>
                      
                      <hr className="my-4" />
                      
                      <div><strong>Contact:</strong> {formData.nom}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Téléphone:</strong> {formData.telephone}</div>
                      <div><strong>Adresse:</strong> {formData.adresse}, {formData.quartier}, {formData.ville}</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                      En envoyant cette demande, vous acceptez d'être contacté par notre équipe 
                      pour confirmer votre rendez-vous.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>

                {currentStep < 3 ? (
                  <Button
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.panneType || !formData.machineType || !formData.description)) ||
                      (currentStep === 2 && (!formData.nom || !formData.email || !formData.telephone || !formData.adresse || !formData.quartier))
                    }
                    className="btn-industrial flex items-center gap-2"
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-accent flex items-center gap-2"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;