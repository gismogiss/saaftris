# Saaftris

Ce projet contient le code de mon site personnel construit avec Next.js et Tailwind CSS.

## Démarrage

```bash
cd blabla
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Structure du projet

La base du code se trouve dans le dossier `blabla/`. On y retrouve notamment :

- `src/` : le code source de l'application Next.js
- `public/` : les ressources statiques
- `package.json` : la liste des dépendances et des scripts npm

## Scripts npm disponibles

Dans `blabla/package.json` plusieurs scripts sont définis :

- `npm run dev` : lance le serveur de développement
- `npm run build` : génère une version optimisée pour la production
- `npm start` : démarre l'application après un `build`
- `npm run lint` : exécute ESLint sur le projet

## Aperçu des fonctionnalités

- **Carte interactive** : une carte du monde affichée sur la page d’accueil permet de
  cliquer sur un pays pour afficher un panneau latéral contenant un texte
  d’inspiration.
- **Section projets** : sous la carte, plusieurs cartes décrivent rapidement mes
  projets et proposent un lien pour les découvrir.

## Ajouter de nouveaux textes d’inspiration

Les textes sont définis dans le composant `CountryPanel` situé dans
`blabla/src/app/components/CountryPanel.tsx`. Modifiez le contenu à l’intérieur du
paragraphe pour personnaliser le message affiché pour un pays donné. Il est aussi
possible d’adapter le composant pour charger les textes depuis un fichier de données.

## Déploiement sur Vercel

Le projet peut être déployé gratuitement sur [Vercel](https://vercel.com/).
Après avoir poussé ce dépôt sur GitHub :

1. Créez un compte Vercel puis importez le dépôt.
2. Lors de la configuration, indiquez que le répertoire de l’application est
   `blabla`.
3. Vercel installera les dépendances et exécutera `npm run build`.
4. Une fois le déploiement terminé, l’application sera accessible via l’URL fournie
   par Vercel.
