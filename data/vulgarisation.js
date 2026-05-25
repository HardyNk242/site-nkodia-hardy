/**
 * Données de la page Vulgarisation.
 * Ajouter un article : push dans presseArticles.
 * Ajouter une vidéo  : push dans videos.
 */

export const presseArticles = [
  {
    titre: {
      fr: "Cartographier les failles pour mieux évaluer l'aléa sismique à Brazzaville",
      en: "Mapping faults to better assess seismic hazard in Brazzaville",
    },
    media: "Les Dépêches de Brazzaville",
    date: "2024",
    url: "#",
    image: "/images/presse-journal-depeche.jpg",
  },
  {
    titre: {
      fr: "Géologie du Congo : un chercheur de l'UMNg distingué pour ses travaux",
      en: "Congo geology: a UMNg researcher recognised for his work",
    },
    media: "Radio Congo — Journal scientifique",
    date: "2023",
    url: "#",
  },
  {
    titre: {
      fr: "Congo Brazzaville : Le Génie civil invité à prendre en compte les données des études structurales et tectoniques sur les grès de l'Inkisi avant toute construction",
      en: "Congo Brazzaville: Civil engineering invited to incorporate structural and tectonic data on Inkisi sandstones before any construction",
    },
    media: "Le Papyrus",
    date: "2020",
    url: "#",
  },
  {
    titre: {
      fr: "Fracturation des roches : Hardy Nkodia mène une étude sur les deux Congo",
      en: "Rock fracturing: Hardy Nkodia leads a study on the two Congos",
    },
    media: "Agence d'Information d'Afrique Centrale (ADIAC) — Nioni Masela",
    date: "2019",
    url: "https://www.adiac-congo.com/content/fracturation-des-roches-hardy-nkodia-mene-une-etude-sur-les-deux-congo-108679",
    image: "/images/journal_depeche_2019.jpg",
  },
];

export const videos = [
  {
    titre: { fr: "Maîtrise le GPS en 5 min", en: "Master GPS in 5 min" },
    description: {
      fr: "Tutoriel pratique pour maîtriser l'utilisation du GPS en géologie de terrain — indispensable pour tout géologue de terrain.",
      en: "Practical tutorial for mastering GPS use in field geology — essential for any field geologist.",
    },
    youtubeId: "wtlFhRysIr0",
    embedSrc: "https://www.youtube.com/embed/wtlFhRysIr0?si=7TBkreivN-qWW4EA",
  },
];
