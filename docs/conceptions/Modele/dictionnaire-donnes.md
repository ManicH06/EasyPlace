Voici le dictionnaire de données correspondant à ce schéma de base de données :

## Table UTILISATEUR

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique de l'utilisateur | Clé Primaire (PK) |
| `name` | STRING | Nom de l'utilisateur | Non Null |
| `email` | STRING | Email de l'utilisateur | Unique, Non Null |
| `password` | STRING | Mot de passe crypté de l'utilisateur | Non Null |
| `role_id` | INT | Rôle de l'utilisateur | Clé Étrangère (FK) |

## Table RÔLE

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique du rôle | Clé Primaire (PK) |
| `name` | STRING | Nom du rôle | Non Null |

## Table PRODUIT

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique du produit | Clé Primaire (PK) |
| `name` | STRING | Nom du produit | Non Null |
| `description` | STRING | Description détaillée du produit | Nullable |
| `price` | FLOAT | Prix du produit | Non Null |
| `stock` | INT | Stock disponible du produit | Non Null |
| `category` | STRING | Catégorie du produit | Nullable |
| `added_date` | DATE | Date d'ajout du produit | Non Null |
| `producer_id` | INT | Producteur associé | Clé Étrangère (FK) |

## Table BOUTIQUE

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique de la boutique | Clé Primaire (PK) |
| `user_id` | INT | Propriétaire de la boutique | Clé Étrangère (FK) |
| `siret` | STRING | Numéro SIRET de la boutique | Unique, Non Null |
| `company_name` | STRING | Nom de l'entreprise | Non Null |
| `phone` | STRING | Numéro de téléphone | Nullable |
| `email` | STRING | Email de contact | Nullable |
| `street` | STRING | Adresse (rue) | Nullable |
| `postal_code` | STRING | Code postal | Nullable |
| `city` | STRING | Ville | Nullable |
| `country` | STRING | Pays | Nullable |

## Table COMMANDE

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique de la commande | Clé Primaire (PK) |
| `order_date` | DATE | Date de la commande | Non Null |
| `status` | STRING | Statut de la commande | Non Null |
| `user_id` | INT | Utilisateur ayant passé la commande | Clé Étrangère (FK) |

## Table LIGNE_COMMANDE

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `order_id` | INT | Identifiant de la commande | Clé Étrangère (FK) |
| `product_id` | INT | Identifiant du produit | Clé Étrangère (FK) |
| `quantity` | INT | Quantité commandée | Non Null |

## Table MESSAGE

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique du message | Clé Primaire (PK) |
| `content` | STRING | Contenu du message | Non Null |
| `send_date` | DATE | Date d'envoi du message | Non Null |
| `order_id` | INT | Commande associée | Clé Étrangère (FK) |

## Table AVIS

| Attribut | Type | Description | Contraintes |
|----------|------|-------------|-------------|
| `id` | INT | Identifiant unique de l'avis | Clé Primaire (PK) |
| `text` | STRING | Contenu de l'avis | Non Null |
| `stars` | INT | Note en étoiles | Non Null |
| `review_date` | DATE | Date de création de l'avis | Non Null |
| `modification_reason` | STRING | Raison de la modification de l'avis | Nullable |
| `review_id` | INT | Avis parent (pour les avis imbriqués) | Clé Étrangère (FK) |
| `user_id` | INT | Utilisateur ayant écrit l'avis | Clé Étrangère (FK) |
| `product_id` | INT | Produit concerné par l'avis | Clé Étrangère (FK) |