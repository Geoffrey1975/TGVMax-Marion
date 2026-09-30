TGV Max Marion
==============

Application web installable (PWA) qui affiche uniquement les disponibilités MAX à 0 € signalées par SNCF Open Data.

Trajets inclus
--------------
- Saint-Étienne → Paris
- Paris → Saint-Étienne
- Lyon → Paris
- Paris → Lyon
- Saint-Étienne → Lyon
- Lyon → Saint-Étienne

Utilisation
-----------
1. Héberger le contenu du dossier sur un hébergement HTTPS (GitHub Pages, Netlify, Cloudflare Pages, etc.).
2. Ouvrir le site sur Android/Chrome.
3. Menu du navigateur > "Installer l'application" ou "Ajouter à l'écran d'accueil".
4. L'application s'ouvrira ensuite comme une petite appli autonome.

Données
-------
Source : https://ressources.data.sncf.com/explore/dataset/tgvmax/
Le jeu est actualisé chaque matin par SNCF, et non en temps réel à la seconde.
Chaque ouverture/actualisation interroge la version la plus récente de l'API.

Réservation
-----------
Chaque résultat contient un bouton vers la page SNCF Connect du trajet concerné.
SNCF Connect ne fournit pas actuellement de lien web public stable garantissant le
préremplissage du train précis (numéro + date + heure) à partir d'un site externe.
