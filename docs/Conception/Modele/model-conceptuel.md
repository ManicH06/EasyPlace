| Entité          | Attributs                                                                                                                                                            |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **User**        | `id` (PK), `nom`, `email`, `mot_de_passe`, `role` (visiteur, client, admin_shop, admin), `adresse` (optionnelle pour les admins)                                     |
| **Produit**     | `id` (PK), `nom`, `description`, `prix`, `stock`, `categorie`, `date_ajout`                                                                                         |
| **Commentaire** | `id` (PK), `texte`, `etoiles` (notation par étoiles), `date_commentaire`, `raison_modification`                                                                      |
| **Commande**    | `id` (PK), `date_commande`, `statut` (en attente, validée, refusée)                                                                                                 |
| **Message**     | `id` (PK), `contenu`, `date_envoi`                                                                                                                                   |

