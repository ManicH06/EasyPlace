export interface Boutique {
    id: number; // Identifiant unique de la boutique
    siret: string; // Numéro SIRET de l'entreprise
    companyName: string; // Nom commercial de l'entreprise
    phone: string; // Numéro de téléphone de contact
    email: string; // Adresse email de contact
    street: string; // Adresse de la rue
    postalCode: string; // Code postal
    city: string; // Ville
    department: string; // Département
    country: string; // Pays
    type: string; // Type de commerce
    image_url: string; // URL de l'image représentant la boutique
    userId: number; // Identifiant de l'utilisateur associé (FK)
    describe: string; // Description courte de la boutique
    category: string; // Catégorie de la boutique
  }
  