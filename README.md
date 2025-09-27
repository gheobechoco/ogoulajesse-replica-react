# Site Jesse Ogoula - Clone parfait d'ogoulajesse.pro

Clone fidèle du site professionnel de Jesse Ogoula, Product & Growth Manager et formateur spécialisé en transformation digitale.

## 🚀 Démarrage rapide

### Commandes essentielles

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/           # Composants React modulaires
│   ├── Header.tsx       # Navigation avec effet scroll
│   ├── Hero.tsx         # Section d'accueil + photo + stats
│   ├── About.tsx        # Présentation et parcours
│   ├── Trust.tsx        # Logos entreprises partenaires
│   ├── Services.tsx     # Consulting Growth + Formation
│   ├── Portfolio.tsx    # Projets (Africakard, École 241...)
│   ├── Certifications.tsx # Diplômes et certifications
│   ├── Testimonials.tsx # Témoignages clients
│   ├── CTA.tsx         # Appel à l'action final
│   └── Footer.tsx      # Contact + liens
├── assets/             # Images et fichiers statiques
├── pages/              # Pages principales
└── index.css          # Système de design + animations
```

## 🎨 Guide de personnalisation

### Modifier les couleurs

Dans `src/index.css`, changez les variables CSS :

```css
:root {
  /* POUR CHANGER LA COULEUR PRINCIPALE (bleu marine) */
  --primary: 213 27% 22%;
  
  /* POUR CHANGER LA COULEUR D'ACCENT (rouge coral) */
  --accent-red: 0 76% 60%;
  
  /* POUR CHANGER LE FOND */
  --background: 248 249 250;
}
```

### Modifier les images

1. **Photo de profil** : Remplacez `src/assets/jesse-profile.jpg`
2. **Logos entreprises** : Dans `Trust.tsx`, modifiez le tableau `companies`
3. **Images projets** : Dans `Portfolio.tsx`, changez les propriétés `image`

### Modifier le contenu

Chaque composant contient des commentaires explicites :

```jsx
// POUR MODIFIER LE TITRE : Changez la variable title
const title = "Votre nouveau titre";

// POUR MODIFIER LES SERVICES : Changez ce tableau
const services = [
  { name: 'Nouveau service', description: '...' }
];
```

### Modifier les informations de contact

Dans `Footer.tsx` :

```jsx
const contactInfo = {
  email: 'votre-email@domain.com',
  phone: '+241 XX XX XX XX',
  location: 'Votre ville, Pays'
};
```

## 🔧 Fonctionnalités incluses

### ✅ Animations au scroll
- Fade-in automatique des sections
- Transitions fluides
- Effets hover sur les boutons

### ✅ Design responsive
- Mobile-first
- Adaptation tablette et desktop
- Navigation mobile avec hamburger

### ✅ SEO optimisé
- Meta tags complets
- Structure sémantique HTML5
- Urls canoniques

### ✅ Performance
- Images optimisées
- Lazy loading
- CSS modulaire

## 📊 Sections du site

1. **Header** - Navigation fixe avec effet scroll
2. **Hero** - Présentation principale + photo + statistiques
3. **About** - Parcours professionnel et expertise
4. **Trust** - Logos des entreprises partenaires
5. **Services** - Consulting Growth et Formation
6. **Portfolio** - Projets réalisés avec métriques
7. **Certifications** - Diplômes et formations
8. **Testimonials** - Témoignages clients en carousel
9. **CTA** - Appel à l'action pour prise de contact
10. **Footer** - Informations de contact et liens

## 🎯 Personnalisation rapide

### Changer le nom et logo
1. Dans `Header.tsx` : Modifiez le logo "OJ"
2. Dans `Footer.tsx` : Changez "Jesse Ogoula"
3. Dans `index.html` : Mettez à jour le title

### Ajouter une nouvelle section
1. Créez un nouveau composant dans `components/`
2. Importez-le dans `pages/Index.tsx`
3. Ajoutez-le dans la structure principale

### Modifier les animations
Dans `src/index.css`, personnalisez :
- `.fade-in-up` - Animation d'entrée par le bas
- `.btn-hover-scale` - Effet hover des boutons
- `.custom-card` - Animation des cartes

## 📱 Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Type safety
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Build tool rapide
- **Lucide React** - Icônes
- **React Router** - Navigation

## 🔄 Mise à jour du contenu

Pour mettre à jour facilement :

1. **Statistiques** : `Hero.tsx` → tableau `stats`
2. **Services** : `Services.tsx` → tableau `services`
3. **Projets** : `Portfolio.tsx` → tableau `projects`
4. **Témoignages** : `Testimonials.tsx` → tableau `testimonials`
5. **Certifications** : `Certifications.tsx` → tableau `certifications`

## 📞 Support

Pour toute question sur la personnalisation :
- Consultez les commentaires dans chaque fichier
- Tous les éléments modifiables sont documentés
- Structure modulaire pour faciliter les modifications

---

**Fait avec ❤️ pour l'écosystème numérique francophone**