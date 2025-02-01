# Documentation des Routes (Mise à Jour)

## Routes pour les Rôles
| Méthode | URL            | Description                          | Paramètres Requis       |
|---------|----------------|--------------------------------------|-------------------------|
| GET     | /roles         | Lister tous les rôles.              | Aucun                  |
| POST    | /roles         | Créer un nouveau rôle (admin uniquement). | `nom`                  |
| GET     | /roles/:id     | Récupérer les détails d'un rôle.     | `id`                   |
| PUT     | /roles/:id     | Mettre à jour un rôle (admin uniquement). | `id`, `nom`            |
| DELETE  | /roles/:id     | Supprimer un rôle (admin uniquement). | `id`                   |

---

## Routes pour les Utilisateurs
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /utilisateurs         | Lister tous les utilisateurs.           | Aucun                  |
| GET     | /utilisateurs/:id     | Récupérer les détails d'un utilisateur.  | `id`                   |
| PUT     | /utilisateurs/:id     | Mettre à jour un utilisateur.           | `id`, données à mettre à jour |
| DELETE  | /utilisateurs/:id     | Supprimer un utilisateur.               | `id`                   |
| GET     | /utilisateurs/:id/boutiques | Lister les boutiques d’un utilisateur. | `id`                   |
| GET     | /utilisateurs/:id/commandes | Lister les commandes d’un utilisateur. | `id`                   |

---

## Routes pour les Boutiques
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /boutiques            | Lister toutes les boutiques.            | Aucun                  |
| POST    | /boutiques            | Créer une nouvelle boutique.            | `siret`, `nom_entreprise`, `email`, `utilisateur_id` |
| GET     | /boutiques/:id        | Récupérer les détails d'une boutique.    | `id`                   |
| PUT     | /boutiques/:id        | Mettre à jour une boutique.             | `id`, données à mettre à jour |
| DELETE  | /boutiques/:id        | Supprimer une boutique.                 | `id`                   |

---

## Routes pour les Produits
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /produits             | Lister tous les produits.               | Aucun                  |
| GET     | /produits?categorie=nom_categorie | Lister les produits par catégorie.   | `categorie`            |
| POST    | /produits             | Créer un nouveau produit.               | `nom`, `description`, `prix`, `stock`, `categorie`, `producteur_id` |
| GET     | /produits/:id         | Récupérer les détails d'un produit.      | `id`                   |
| PUT     | /produits/:id         | Mettre à jour un produit.               | `id`, données à mettre à jour |
| DELETE  | /produits/:id         | Supprimer un produit.                   | `id`                   |

---

## Routes pour les Commandes
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /commandes            | Lister toutes les commandes.            | Aucun                  |
| POST    | /commandes            | Créer une nouvelle commande.            | `utilisateur_id`, autres détails optionnels |
| GET     | /commandes/:id        | Récupérer les détails d'une commande.    | `id`                   |
| PUT     | /commandes/:id        | Mettre à jour une commande.             | `id`, données à mettre à jour |
| DELETE  | /commandes/:id        | Supprimer une commande.                 | `id`                   |

---

## Routes pour les Messages
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /messages             | Lister tous les messages.               | Aucun                  |
| POST    | /messages             | Envoyer un nouveau message.             | `contenu`, `commande_id`, `utilisateur_id` |
| GET     | /messages/:id         | Récupérer les détails d'un message.      | `id`                   |
| PUT     | /messages/:id         | Mettre à jour un message.               | `id`, données à mettre à jour |
| DELETE  | /messages/:id         | Supprimer un message.                   | `id`                   |

---

## Routes pour les Avis
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /avis                 | Lister tous les avis.                   | Aucun                  |
| POST    | /avis                 | Ajouter un avis.                        | `texte`, `etoiles`, `utilisateur_id`, `produit_id` |
| GET     | /avis/:id             | Récupérer les détails d'un avis.         | `id`                   |
| PUT     | /avis/:id             | Mettre à jour un avis.                  | `id`, données à mettre à jour |
| DELETE  | /avis/:id             | Supprimer un avis.                      | `id`                   |
| POST    | /avis/:id/reponses    | Ajouter une réponse à un avis.          | `id` (avis parent), `texte` |
| GET     | /avis/:id/reponses    | Récupérer les réponses à un avis.       | `id`                   |

---

## Routes pour l'Authentification
| Méthode | URL        | Description                              | Paramètres Requis         |
|---------|------------|------------------------------------------|---------------------------|
| POST    | /register  | Créer un compte utilisateur (inscription). | `nom`, `email`, `mot_de_passe` |
| POST    | /login     | Connecter un utilisateur (connexion).     | `email`, `mot_de_passe`   |

---

### Détails :
- **GET /utilisateurs/:id/boutiques** :  
  Retourne les boutiques associées à un utilisateur.

- **GET /produits?categorie=nom_categorie** :  
  Permet de filtrer les produits par catégorie pour des recherches spécifiques.

- **POST /register** :  
  Permet à un nouvel utilisateur de s'inscrire en fournissant un nom, un email unique et un mot_de_passe sécurisé.

- **POST /login** :  
  Authentifie un utilisateur en vérifiant son email et son mot_de_passe. Retourne un jeton (token) pour les appels ultérieurs si les identifiants sont corrects.

## Gestion des Réponses

   codes HTTP appropriés pour chaque action :

- **201** : Création réussie (pour les requêtes `POST`).
- **204** : Suppression réussie (pour les requêtes `DELETE`).
- **404** : Ressource non trouvée.
- **400** : Requête incorrecte.

