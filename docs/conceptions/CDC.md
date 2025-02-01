# 🛒 - EasyPlace SaaS

**Marketplace SaaS - EasyPlace** est une marketplace flexible pour relier directement les **commerçants locaux** et **consommateurs**. Les commerçants peuvent facilement gérer leurs vitrines, tandis que les consommateurs découvrent une large gamme de produits locaux avec des informations détaillées et transparentes.

## 🌍 Objectifs

- **Marketplace** : Connecter directement les commerçants et les consommateurs.
- **Filtres avancés** : Trouver rapidement des produits selon des critères comme le type, la localisation, les promotions, etc.
- **Gestion simplifiée** : Permettre aux commerçants de mettre en avant certains produits sans nécessiter un suivi d’inventaire complet en ligne.
- **Réservation simplifiée** : Utiliser des options de réservation ou de contact direct pour une interaction directe et efficace.

---

## 📌 Besoins Fonctionnels

1. **Créer un compte :** 
   - Les utilisateurs doivent pouvoir s'inscrire et se connecter à la plateforme.
   - Les commerçants doivent pouvoir demander l'ouverture d'une boutique.
2. **Parcourir les boutiques :**
   - Les utilisateurs doivent pouvoir rechercher et parcourir les boutiques par localisation, catégorie ou nom.
3. **Gestion des produits :**
   - Les commerçants doivent pouvoir ajouter, modifier et supprimer des produits affichés dans leur boutique.
4. **Commander des produits :**
   - Les consommateurs doivent pouvoir réserver ou commander des produits en ligne.
   - Possibilité de choisir entre livraison et retrait en boutique.
5. **Interactions utilisateurs :**
   - Les utilisateurs doivent pouvoir laisser des avis et des notes sur les produits ou les boutiques.
   - Les commerçants doivent pouvoir répondre aux avis.
6. **Événements communautaires :**
   - Les commerçants doivent pouvoir publier des événements ou des offres spéciales visibles aux utilisateurs.
7. **Notification :**
   - Notifications par email ou SMS pour les mises à jour sur les commandes ou les événements.

---

## 🔧 Besoins Techniques

### 🖥️ Front-End
1. **Framework moderne :** Utilisation de Next.js pour des performances optimisées et un SEO efficace.
2. **Design réactif :** Tailwind CSS ou styled-components pour une expérience fluide sur tous les appareils (desktop, mobile, tablette).
3. **Interaction utilisateur :** Implémentation d'une interface utilisateur intuitive et ergonomique.

### 🛠️ Back-End
1. **API RESTful :** Développée avec Express.js pour la gestion des requêtes (CRUD, authentification, etc.).
2. **ORM pour base de données :** Prisma pour simplifier la gestion des relations entre les données.
3. **Authentification :** Système sécurisé basé sur JWT pour l'authentification et la gestion des sessions.

### 📊 Base de Données
1. **Base relationnelle :** PostgreSQL pour stocker les données des utilisateurs, boutiques, produits, commandes et avis.
2. **Sécurité :** Chiffrement des données sensibles (mots de passe, informations personnelles).

### 📡 Infrastructure et Déploiement
1. **Conteneurisation :** Utilisation de Docker pour un environnement de développement cohérent.
2. **CI/CD :** Pipeline automatisé avec GitHub Actions pour tester, construire et déployer le projet.
3. **Scalabilité :** Infrastructure prête à évoluer en fonction du nombre croissant d'utilisateurs.

### 🔒 Sécurité
1. **Protection contre les attaques courantes :** Mise en œuvre de protections contre les injections SQL, XSS, CSRF, etc.
2. **HTTPS :** Utilisation d'un certificat SSL pour sécuriser les communications.
3. **Backups :** Système de sauvegarde régulière des données pour éviter toute perte.

### 🌐 Compatibilité et Performances
1. **Navigateurs supportés :** Compatibilité avec les principaux navigateurs modernes (Chrome, Firefox, Edge, Safari).
2. **Performance optimisée :** Chargement rapide des pages grâce à un serveur CDN pour les assets.

### 🛠️ Maintenance
1. **Documentation :** Code bien documenté pour faciliter la prise en main par d'autres développeurs.
2. **Tests :** Utilisation de tests unitaires et d'intégration pour assurer la stabilité du projet.

---

## 🛠️ Fonctionnalités de notre Minimum Viable Project 

Le produit minimum viable inclut les fonctionnalités suivantes :  
1. **Gestion de compte** :  
   - Créer un compte utilisateur.  
   - Demander l'ouverture d'une boutique.  
2. **Exploration et achat** :  
   - Parcourir les boutiques en fonction de la localisation.  
   - Afficher les produits disponibles dans une boutique.  
   - Commander des produits.  
   - Recevoir des informations sur l'état de la livraison.  
3. **Interactions utilisateur** :  
   - Laisser un avis sur une boutique ou un produit.  
   - Répondre aux avis en tant que vendeur.  
   - Noter les produits ou boutiques.  

---

## 🌟 Évolutions possibles  

EasyPlace pourrait évoluer pour devenir un véritable réseau social local, favorisant la vie en communauté et la connexion entre les commerçants et les habitants.  
- **Posts communautaires** : Les utilisateurs pourraient publier des messages, échanger des idées ou partager des nouvelles locales.  
- **Événements organisés** : Les commerçants pourraient proposer des événements, comme des dégustations, des ateliers ou des ventes flash.  
- **Offres exclusives** : Les commerçants pourraient publier des offres spéciales ou des promotions pour leur communauté locale.  
- **Une expérience sociale enrichie** : Un mélange unique entre Twitter pour la communication et Amazon pour la découverte et la commande de produits locaux.  

---

## 🚀 Technologies

- **⚛️ Next.js** – Framework moderne et optimisé pour le SEO
- **🎨 Tailwind CSS / styled-components** – Framework CSS pour un design réactif avec possibilité de personnalisation
- **🛠️ TypeScript** – Typage statique pour un code robuste
- **🧩 Express** – Backend léger pour gérer les requêtes, formulaires et réservations
- **📊 Prisma** – ORM pour la gestion des données relationnelles
- **🐋 Docker** – Conteneurisation pour un environnement de développement et de production cohérent
- **🔄 CI/CD avec GitHub Flow** – Pour une intégration et une livraison continues

---

## 🎯 Cible du projet  

EasyPlace cible spécifiquement les **marchés locaux** et les petits commerçants, excluant les grandes surfaces comme Auchan ou Carrefour.  
L'objectif est de :  
- **Promouvoir les commerces de proximité** : Boulangeries, boucheries, fleuristes, bistros, etc., pour rendre visibles leurs offres et services.  
- **Créer un lien communautaire** : Offrir une plateforme où les habitants peuvent découvrir ce qui se passe autour d'eux.  
- **Lutter contre l'isolement** : Dans un monde ultra-connecté mais souvent déconnecté localement, EasyPlace permet de voir, commander et échanger avec les commerçants du quartier.  

---

## 🌐 Compatibilité Navigateur pour EasyPlace

| **Navigateurs**            | **Compatibilité**                           |
|----------------------------|--------------------------------------------|
| **Google Chrome**          | Version 70+                                |
| **Mozilla Firefox**        | Version 63+                                |
| **Microsoft Edge**         | Version 79+                                |
| **Safari**                 | Version 12+                                |
| **Opera**                  | Versions modernes                          |
| **Internet Explorer (IE)** | Non supporté                               |
| **Mobile Browsers**        | iOS Safari 12+ / Android Chrome 70+        |

---

## 🌳 Arborescence

## 🔗 Documentation des Routes

### Routes pour les Rôles
| Méthode | URL            | Description                          | Paramètres Requis       |
|---------|----------------|--------------------------------------|-------------------------|
| GET     | /roles         | Lister tous les rôles.              | Aucun                  |
| POST    | /roles         | Créer un nouveau rôle.              | `nom`                  |
| GET     | /roles/:id     | Récupérer les détails d'un rôle.     | `id`                   |
| PUT     | /roles/:id     | Mettre à jour un rôle.              | `id`, `nom`            |
| DELETE  | /roles/:id     | Supprimer un rôle.                  | `id`                   |

---

### Routes pour les Utilisateurs
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /utilisateurs         | Lister tous les utilisateurs.           | Aucun                  |
| GET     | /utilisateurs/:id     | Récupérer les détails d'un utilisateur.  | `id`                   |
| PUT     | /utilisateurs/:id     | Mettre à jour un utilisateur.           | `id`, données à mettre à jour |
| DELETE  | /utilisateurs/:id     | Supprimer un utilisateur.               | `id`                   |

---

### Routes pour les Boutiques
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /boutiques            | Lister toutes les boutiques.            | Aucun                  |
| POST    | /boutiques            | Créer une nouvelle boutique.            | `siret`, `nom_entreprise`, `email`, `utilisateur_id` |
| GET     | /boutiques/:id        | Récupérer les détails d'une boutique.    | `id`                   |
| PUT     | /boutiques/:id        | Mettre à jour une boutique.             | `id`, données à mettre à jour |
| DELETE  | /boutiques/:id        | Supprimer une boutique.                 | `id`                   |

---

### Routes pour les Produits
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /produits             | Lister tous les produits.               | Aucun                  |
| POST    | /produits             | Créer un nouveau produit.               | `nom`, `description`, `prix`, `stock`, `categorie`, `producteur_id` |
| GET     | /produits/:id         | Récupérer les détails d'un produit.      | `id`                   |
| PUT     | /produits/:id         | Mettre à jour un produit.               | `id`, données à mettre à jour |
| DELETE  | /produits/:id         | Supprimer un produit.                   | `id`                   |

---

### Routes pour les Commandes
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /commandes            | Lister toutes les commandes.            | Aucun                  |
| POST    | /commandes            | Créer une nouvelle commande.            | `utilisateur_id`, autres détails optionnels |
| GET     | /commandes/:id        | Récupérer les détails d'une commande.    | `id`                   |
| PUT     | /commandes/:id        | Mettre à jour une commande.             | `id`, données à mettre à jour |
| DELETE  | /commandes/:id        | Supprimer une commande.                 | `id`                   |

---

### Routes pour les Messages
| Méthode | URL                   | Description                              | Paramètres Requis       |
|---------|-----------------------|------------------------------------------|-------------------------|
| GET     | /messages             | Lister tous les messages.               | Aucun                  |
| POST    | /messages             | Envoyer un nouveau message.             | `contenu`, `commande_id`, `utilisateur_id` |
| GET     | /messages/:id         | Récupérer les détails d'un message.      | `id`                   |
| PUT     | /messages/:id         | Mettre à jour un message.               | `id`, données à mettre à jour |
| DELETE  | /messages/:id         | Supprimer un message.                   | `id`                   |

---

### Routes pour les Avis
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

### Routes pour l'Authentification
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

### Gestion des Réponses

   codes HTTP appropriés pour chaque action :

- **201** : Création réussie (pour les requêtes `POST`).
- **204** : Suppression réussie (pour les requêtes `DELETE`).
- **404** : Ressource non trouvée.
- **400** : Requête incorrecte.

---

## 🧢 User Stories

| ID   | En Tant Que                   | Je Veux Pouvoir                                    | Afin De                                             | Critères d'Acceptation                                                                                    |
| ---- | ----------------------------- | -------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| US1  | Visiteur                      | Voir les produits disponibles                      | Explorer l'offre                                    | Les produits sont visibles sur une page dédiée avec un affichage simple (liste, grille, etc.).            |
| US2  | Visiteur                      | Filtrer les produits (par catégorie, prix, etc.)   | Trouver ce qui m'intéresse rapidement               | Un système de filtres est disponible pour affiner la recherche des produits selon plusieurs critères.     |
| US3  | Visiteur                      | Voir la fiche détaillée d'un produit               | Avoir plus d'informations avant de faire un choix   | La fiche produit présente des détails comme la description, le prix, et les caractéristiques spécifiques. |
| US4  | Administrateur du shop        | Créer un nouveau produit                           | Ajouter de nouveaux articles à mon shop             | Un formulaire permet de saisir toutes les informations nécessaires pour créer un produit.                 |
| US5  | Administrateur du shop        | Modifier les produits existants                    | Mettre à jour les informations des produits         | Il est possible de modifier les détails d'un produit existant via un formulaire.                          |
| US6  | Administrateur du shop        | Mettre à jour les stocks ou les prix d'un produit  | Maintenir l'inventaire à jour                       | Une interface permet de mettre à jour les quantités disponibles ou les prix des produits.                 |
| US7  | Administrateur du shop        | Effacer un produit                                 | Supprimer les produits obsolètes ou non disponibles | Un bouton de suppression est disponible pour retirer un produit de la base de données.                    |
| US8  | Administrateur du shop        | Me connecter                                       | Accéder à mon interface de gestion                  | Un système d'authentification est en place pour accéder aux fonctionnalités d'administration.             |
| US9  | Administrateur du shop        | Afficher une promotion (popup) lors d'un événement | Promouvoir des offres spéciales                     | Un système de gestion de popup permet de déclencher des promotions lors d'événements particuliers.        |
| US10 | Administrateur du site entier | Gérer plusieurs shops                              | Superviser et administrer les shops                 | Une interface permet de visualiser et gérer les différents shops.                                         |
| US11 | Administrateur du site entier | Modifier les détails d'un shop                     | Maintenir les informations correctes des shops      | Il est possible de modifier les détails d'un shop via une interface dédiée.                               |
| US12 | Administrateur du site entier | Créer un shop                                      | Ajouter de nouveaux shops à la plateforme           | Un formulaire permet de créer un shop en spécifiant toutes les informations nécessaires.                  |
| US13 | Administrateur du site entier | Créer un compte pour un administrateur de shop     | Permettre la gestion autonome de chaque shop        | Un formulaire permet de créer un compte pour un nouvel administrateur de shop.                            |
| US14 | Administrateur du site entier | Modifier le compte d'un administrateur de shop     | Mettre à jour les informations de gestion           | Il est possible de modifier les informations d'un compte administrateur de shop.                          |
| US15 | Administrateur du site entier | Gérer les droits et les rôles des utilisateurs     | Contrôler l'accès aux différentes fonctionnalités   | Un système de gestion des rôles et des permissions est en place pour accorder ou restreindre des accès.   |

---

### 🚨 Analyse de risque  

1. **Problèmes de sécurité et de confidentialité** :  
   - Risques liés à la collecte et au stockage des données utilisateurs, notamment les informations personnelles et les données bancaires.  
   - **Mesure proposée** : Mise en place de protocoles de sécurité (HTTPS, encryption des données sensibles, conformité RGPD).  

2. **Fiabilité des commerçants** :  
   - Produits non conformes à la description ou problèmes dans les commandes.  
   - **Mesure proposée** : Système d'avis et de notations pour instaurer la confiance et responsabiliser les commerçants.  

3. **Disponibilité du service** :  
   - Risques de downtime liés à des problèmes techniques ou à une charge élevée.  
   - **Mesure proposée** : Infrastructure robuste (Docker, CI/CD, cloud scaling) et surveillance en temps réel.  

4. **Concurrence avec d'autres plateformes** :  
   - Le marché local peut être concurrencé par des solutions existantes comme Leboncoin ou Vinted.  
   - **Mesure proposée** : Se démarquer par une approche hyper-locale et communautaire, avec un accent sur la proximité et les interactions humaines.  

---  

## 🗂️ Organisation