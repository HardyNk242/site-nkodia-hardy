/**
 * Données de la page Engagement.
 * - pedagogieItems : innovations pédagogiques
 * - kongoScience   : association
 * - conferencesEngagement : conférences / invitations
 */

export const pedagogieItems = [
  {
    periode: "Mai 2019 — Janvier 2021",
    institution: "École Africaine de Développement (EAD)",
    lieu: { fr: "République du Congo", en: "Republic of the Congo" },
    description: {
      fr: "Introduction et enseignement du cours de géologie structurale dans le programme académique de l'EAD.",
      en: "Introduction and teaching of the structural geology course within the EAD academic programme.",
    },
  },
  {
    periode: "2024 — présent",
    institution: "Complexe Scolaire Professeur Dieu-Veille",
    lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
    description: {
      fr: "Création et direction d'un établissement scolaire avec un programme axé sur la qualité pédagogique. Taux d'inscription à 80 % des effectifs maximaux dès la première année.",
      en: "Creation and management of a school with a programme focused on pedagogical quality. Enrolment rate at 80% of maximum capacity from the first year.",
    },
  },
  {
    periode: "En cours",
    institution: { fr: "Cours en ligne — Géologie Structurale", en: "Online courses — Structural Geology" },
    lieu: { fr: "Université Marien Ngouabi / Site web", en: "Marien Ngouabi University / Website" },
    description: {
      fr: "Ressources pédagogiques numériques librement accessibles : cours magistraux, quiz interactifs et exercices corrigés en géologie structurale.",
      en: "Freely accessible digital teaching resources: lectures, interactive quizzes and solved exercises in structural geology.",
    },
    lien: { href: "/cours", label: { fr: "Voir les cours →", en: "View courses →" } },
  },
];

export const kongoScience = {
  periode: "2019 — présent",
  titre: {
    fr: "Association Kongo Science — Fondateur et chef de projet",
    en: "Kongo Science Association — Founder and project leader",
  },
  description: {
    fr: "Fondée en 2019, l'association Kongo Science vise à renforcer les compétences des chercheurs africains et à promouvoir le développement scientifique sur le continent africain. En tant que fondateur, le Dr. Hardy Nkodia coordonne les actions de formation, de mise en réseau et de plaidoyer pour des sciences plus inclusives en Afrique.",
    en: "Founded in 2019, the Kongo Science association aims to strengthen the skills of African researchers and promote scientific development across the African continent. As founder, Dr. Hardy Nkodia coordinates training, networking and advocacy actions for more inclusive science in Africa.",
  },
};

export const conferencesEngagement = [
  {
    date: "Août 2024",
    titre: {
      fr: "37e Congrès Géologique International (IGC) — Busan, Corée du Sud",
      en: "37th International Geological Congress (IGC) — Busan, South Korea",
    },
    details: {
      fr: "Invité GeoHost : transport, hébergement et dépenses locales couverts en reconnaissance des travaux de recherche. Soutien financier complémentaire du projet AGATE pour la participation.",
      en: "GeoHost invitee: transport, accommodation and local expenses covered in recognition of research contributions. Additional financial support from the AGATE project for participation.",
    },
  },
  {
    date: "Novembre 2021",
    titre: {
      fr: "13e cours international sur le karst et le développement durable",
      en: "13th International Course on Karst and Sustainable Development",
    },
    details: {
      fr: "UNESCO / China Geological Survey / IUGS / IKCAGS — Certificat d'excellent stagiaire décerné à l'issue de la formation.",
      en: "UNESCO / China Geological Survey / IUGS / IKCAGS — Certificate of excellent trainee awarded at the end of the course.",
    },
  },
  {
    date: "Septembre 2021",
    titre: {
      fr: "Conférence Geologica Belgica 2021 — Belgique",
      en: "Geologica Belgica 2021 Conference — Belgium",
    },
    details: {
      fr: "Communication scientifique sur la tectonique de la chaîne de l'Ouest du Congo et la sismicité en Afrique centrale. Financement : Musée Royal de l'Afrique Centrale (Tervuren).",
      en: "Scientific communication on West Congo belt tectonics and seismicity in Central Africa. Funded by the Royal Museum for Central Africa (Tervuren).",
    },
  },
];
