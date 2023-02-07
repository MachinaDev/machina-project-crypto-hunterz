# Bienvenue sur Crypto-Hunterz

## Introduction

Communauté de chasseur de cryptos.

Ici, vous pouvez partager les projets qui vous plaisent le plus et ceux sur lesquelles vous pensez que ça va cartonner dans le futur.

Notez, commentez, likez votre projets préférés.

- [Machina Project Crypto Hunter Z](https://machina-project-crypto-hunterz.vercel.app/)

## Installation en local

Cette application a été conçu dans le but de mettre en place un projet de type MERN (Mongo Express React NodeJS).

1. Tapez les commandes suivantes dans un terminal: 

   - Récupérer le code : 
     - `git clone git@github.com:MachinaDev/machina-project-crypto-hunterz.git && cd machina-project-crypto-hunterz`
   - Installer le côté front 
     - `cd frontend && yarn install && cd ..`
   - Installer le côté backend 
     - `cd backend && npm install && cd ..`

2. Il faut rajouter les variables d'envrionnement suivantes dans la partie backend:
   - Dans le dossier `backend`:
   	- `cd backend && cp .env.example .env`
   	- Modifier les éléments du fichier `.env` nouvellement créé pour votre situation.

3. Il faut rajouter les variables d'envrionnement suivantes dans la partie backend:
   - Dans le dossier `frontend`:
   	- `cd frontend && cp .env.example .env`
   	- Modifier les éléments du fichier `.env` nouvellement créé pour votre situation.

4. Ouvrez deux fenêtres de terminaux et:
     - dans la première fenêtre lancez le frontend:
       - `cd frontend && yarn start`
     - dans la seconde fenêtre lancez le backend:
       - `cd frontend && npm run start`
