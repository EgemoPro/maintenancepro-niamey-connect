import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentRequest = await req.json();

    // Email to MAINTENANCEPROSERVICE
    const emailToCompany = await resend.emails.send({
      from: "MAINTENANCEPROSERVICE <onboarding@resend.dev>",
      to: ["maintenanceproservice067@gmail.com"],
      subject: `Nouvelle demande de RDV - ${appointmentData.nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🔧 Nouvelle Demande de Rendez-vous
          </h1>
          
          <h2 style="color: #374151; margin-top: 30px;">📋 Détails de la Panne</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Type de panne:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.panneType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Type d'appareil:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.machineType}</td>
            </tr>
            ${appointmentData.marque ? `
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Marque:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.marque}</td>
            </tr>
            ` : ''}
            ${appointmentData.modele ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Modèle:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.modele}</td>
            </tr>
            ` : ''}
            ${appointmentData.numeroSerie ? `
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">N° Série:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.numeroSerie}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Description:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.description}</td>
            </tr>
          </table>

          <h2 style="color: #374151; margin-top: 30px;">👤 Coordonnées Client</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Nom/Raison sociale:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${appointmentData.nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">
                <a href="mailto:${appointmentData.email}" style="color: #1e40af;">${appointmentData.email}</a>
              </td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Téléphone:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">
                <a href="tel:${appointmentData.telephone}" style="color: #1e40af;">${appointmentData.telephone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Adresse complète:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">
                ${appointmentData.adresse}<br>
                ${appointmentData.quartier}, ${appointmentData.ville}
              </td>
            </tr>
          </table>

          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>⚡ Action requise:</strong> Contacter le client dans les plus brefs délais pour confirmer le rendez-vous.
            </p>
          </div>

          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Demande reçue le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}<br>
            MAINTENANCEPROSERVICE - NIF: 127617/P - Niamey, Niger
          </p>
        </div>
      `,
    });

    // Confirmation email to client
    const emailToClient = await resend.emails.send({
      from: "MAINTENANCEPROSERVICE <onboarding@resend.dev>",
      to: [appointmentData.email],
      subject: "Confirmation de votre demande de rendez-vous - MAINTENANCEPROSERVICE",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            🔧 MAINTENANCEPROSERVICE
          </h1>
          
          <p style="font-size: 18px; color: #374151;">Bonjour ${appointmentData.nom},</p>
          
          <p style="color: #374151;">
            Nous avons bien reçu votre demande de rendez-vous pour la réparation/maintenance de votre 
            <strong>${appointmentData.machineType}</strong>.
          </p>

          <div style="background-color: #dbeafe; border-left: 4px solid #1e40af; padding: 15px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">📋 Récapitulatif de votre demande</h3>
            <p style="margin: 5px 0;"><strong>Type de panne:</strong> ${appointmentData.panneType}</p>
            <p style="margin: 5px 0;"><strong>Appareil:</strong> ${appointmentData.machineType}</p>
            ${appointmentData.marque ? `<p style="margin: 5px 0;"><strong>Marque:</strong> ${appointmentData.marque}</p>` : ''}
            <p style="margin: 5px 0;"><strong>Description:</strong> ${appointmentData.description}</p>
          </div>

          <h3 style="color: #374151;">🚀 Prochaines étapes</h3>
          <ol style="color: #374151;">
            <li>Notre équipe technique va analyser votre demande</li>
            <li>Nous vous contacterons sous 24h pour confirmer le rendez-vous</li>
            <li>Un technicien spécialisé se déplacera à votre adresse</li>
            <li>Intervention rapide et professionnelle garantie</li>
          </ol>

          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>📞 Contact urgent:</strong> En cas d'urgence, contactez-nous directement au 
              <a href="mailto:maintenanceproservice067@gmail.com" style="color: #92400e;">maintenanceproservice067@gmail.com</a>
            </p>
          </div>

          <p style="color: #374151;">
            Merci de votre confiance,<br>
            <strong>L'équipe MAINTENANCEPROSERVICE</strong>
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 12px;">
            MAINTENANCEPROSERVICE<br>
            NIF: 127617/P<br>
            Niamey, Niger<br>
            Email: maintenanceproservice067@gmail.com
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { emailToCompany, emailToClient });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Demande de rendez-vous envoyée avec succès" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);