const base = import.meta.env.BASE_URL || '/'

export const formations = [
  {
    id: 1,
    titre: "Développeur Web et Web Mobile",
    description: "Apprendre HTML, CSS, JavaScript et Vue.js.",
    duree: "8 mois",
    niveau: "Débutant",
    prix: 4500,
    image: base + 'images/formation-web.png'
  },
  {
    id: 2,
    titre: "Concepteur Développeur d'Applications",
    description: "Développement Full Stack avec des projets concrets.",
    duree: "12 mois",
    niveau: "Intermédiaire",
    prix: 6500,
    image: base + 'images/formation-fullstack.svg'
  },
  {
    id: 3,
    titre: "Designer UI",
    description: "Création d'interfaces modernes et accessibles.",
    duree: "6 mois",
    niveau: "Débutant",
    prix: 3000,
    image: base + 'images/formation-ui.svg'
  },
  {
    id: 4,
    titre: "Community Manager",
    description: "Gestion des réseaux sociaux et stratégie éditoriale.",
    duree: "4 mois",
    niveau: "Débutant",
    prix: 2500,
    image: base + 'images/formation-social.svg'
  },
  {
    id: 5,
    titre: "Marketing Digital",
    description: "Stratégies marketing numériques et acquisition.",
    duree: "5 mois",
    niveau: "Débutant",
    prix: 2800,
    image: base + 'images/formation-marketing.svg'
  },
  {
    id: 6,
    titre: "Développeur Front-End",
    description: "Vue.js, Bootstrap, JavaScript et intégration web.",
    duree: "7 mois",
    niveau: "Intermédiaire",
    prix: 4200,
    image: base + 'images/formation-frontend.svg'
  },
  {
    id: 7,
    titre: "Développeur Back-End",
    description: "Node.js, API REST et bases de données.",
    duree: "7 mois",
    niveau: "Intermédiaire",
    prix: 4300,
    image: base + 'images/formation-backend.svg'
  },
  {
    id: 8,
    titre: "Data Analyst",
    description: "Analyse, visualisation de données et reporting.",
    duree: "8 mois",
    niveau: "Avancé",
    prix: 5000,
    image: base + 'images/formation-data.svg'
  }
]
