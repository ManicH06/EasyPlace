# 📘 Modèle Logique de Données (MLD)

## 🗃️ Convention d’écriture

- **Clés primaires** sont **soulignées**.
- **Clés étrangères** sont précédées d’un `#`.

---

## 🔐 ROLE

**ROLE**(  
  <ins>id_role</ins>,  
  nom  
)

---

## 👤 UTILISATEUR

**UTILISATEUR**(  
  <ins>id_utilisateur</ins>,  
  nom,  
  email,  
  mot_de_passe,  
  #id_role  
)

---

## 🏪 BOUTIQUE

**BOUTIQUE**(  
  <ins>id_boutique</ins>,  
  siret UNIQUE,  
  nom_entreprise,  
  telephone,  
  email,  
  rue,  
  code_postal,  
  ville,  
  pays,  
  image,  
  #id_utilisateur  
)

---

## 📦 PRODUIT

**PRODUIT**(  
  <ins>id_produit</ins>,  
  nom,  
  description,  
  prix,  
  stock,  
  categorie,  
  image,  
  #id_utilisateur,  
  #id_boutique  
)

---

## 🧾 COMMANDE

**COMMANDE**(  
  <ins>id_commande</ins>,  
  date_commande,  
  statut,  
  #id_utilisateur  
)

---

## 📑 LIGNE_COMMANDE

**LIGNE_COMMANDE**(  
  <ins>#id_commande</ins>,  
  <ins>#id_produit</ins>,  
  quantite  
)

---

## 💬 MESSAGE

**MESSAGE**(  
  <ins>id_message</ins>,  
  contenu,  
  date_envoi,  
  #id_commande,  
  #id_utilisateur  
)

---

## 🌟 AVIS

**AVIS**(  
  <ins>id_avis</ins>,  
  texte,  
  etoiles,  
  date_avis,  
  #id_utilisateur,  
  #id_produit  
)

---

## 💭 REPONSE_AVIS

**REPONSE_AVIS**(  
  <ins>id_reponse</ins>,  
  contenu,  
  #id_avis,  
  #id_utilisateur  
)

---

## 🖼️ MEDIA

**MEDIA**(  
  <ins>id_media</ins>,  
  url,  
  type,  
  #id_produit, 
  #id_boutique 
)



