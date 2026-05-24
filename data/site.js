/**
 * Données éditoriales du site. Modifiez ce fichier pour mettre à jour
 * les publications, l'équipe, les événements, etc.
 */

export const profil = {
  nom: "Dr. Nkodia Hardy Medry Dieu-Veil",
  titre: {
    fr: "Enseignant-chercheur en géologie structurale et tectonique",
    en: "Lecturer-researcher in structural geology and tectonics",
  },
  institution: {
    fr: "Université Marien Ngouabi — Brazzaville, République du Congo",
    en: "Marien Ngouabi University — Brazzaville, Republic of the Congo",
  },
  citation: {
    fr: "« La roche garde la mémoire des forces qui l'ont déformée : lire une structure, c'est remonter le temps des contraintes. »",
    en: "« Rock preserves the memory of the forces that deformed it: to read a structure is to travel back through the history of stresses. »",
  },
  liens: {
    researchgate: "https://www.researchgate.net/profile/Hardy-Medry-Dieu-Veil-Nkodia",
    scholar: "https://scholar.google.com/citations?user=gYOI-FkAAAAJ&hl=en",
    email: "hardy.nkodia@umng.cg",
  },
};

export const publicationsRecentes = [
  {
    annee: 2026,
    titre:
      "Assessing the contemporary stress field and seismogenic structures of the Korean peninsula using focal-mechanism inversion and slip-tendency analysis",
    revue: "Tectonophysics, art. 231261 — In Press",
    auteurs: "Nkodia H. M. D.-V., Park K., Naik S. P., Peace A. L., & Kim Y.-S.",
    doi: "10.1016/j.tecto.2026.231261",
    image: "/images/figure-pub-2026-korea-stress.png",
    resume: {
      fr: "Cette étude détermine les forces qui s'exercent actuellement sur la croûte terrestre sous la péninsule coréenne, une région qui connaît des séismes malgré l'absence de frontière de plaques majeure à proximité. En analysant des centaines de mécanismes au foyer (enregistrements de séismes passés) et en appliquant une analyse de slip-tendency, les auteurs ont identifié quelles failles actives sont les plus susceptibles de se rompre et de provoquer de futurs tremblements de terre. La recherche a été conduite à l'Université Nationale de Pukyong, à Busan (Corée du Sud).",
      en: "This paper investigated the forces currently acting on the Earth's crust beneath the Korean peninsula — a region that experiences earthquakes despite sitting far from a major plate boundary. By analysing hundreds of earthquake focal mechanisms and applying slip-tendency analysis to known active faults, the team identified which fault systems are most likely to rupture and generate future earthquakes. The study found that southeastern Korea hosts several high-risk faults. The research was carried out at Pukyong National University in Busan, South Korea.",
    },
  },
  {
    annee: 2026,
    titre:
      "Inventory of karstic cavities of the Schisto-Calcaire Group, Republic of Congo: Applying a geoheritage promotion approach in the Madingou region",
    revue: "International Journal of Geoheritage and Parks, 14(1), 43–59",
    auteurs: "Bazebizonza Tchiguina N. C., Samba P. R. R., Nkodia H. M. D.-V., Boudzoumou F., Arfaoui I., François C., & Lahogue P.",
    doi: "10.1016/j.ijgeop.2026.02.002",
    image: "/images/figure-pub-2026.jpg",
    resume: {
      fr: "Un inventaire systématique des cavités karstiques du Groupe Schisto-Calcaire au Congo-Brazzaville, dans la région de Madingou, révèle un patrimoine géologique méconnu. L'étude propose un cadre de valorisation géotouristique pour ces grottes et avens en s'appuyant sur des critères scientifiques et culturels.",
      en: "A systematic inventory of karstic cavities in the Schisto-Calcaire Group of Congo-Brazzaville, in the Madingou region, reveals an underrecognised geological heritage. The study proposes a geotourism framework for these caves and sinkholes based on scientific and cultural criteria.",
    },
  },
  {
    annee: 2025,
    titre:
      "Active crustal deformation across a nucleating extensional microplate, D. R. Congo, East Africa",
    revue: "Tectonics, 44(7), e2025TC008815",
    auteurs: "Colet M., Kolawole F., Ajala R., Delvaux D., & Nkodia H. M. D.-V.",
    doi: "10.1029/2025TC008815",
    image: "/images/figure-pub-2025.jpg",
    resume: {
      fr: "Cette étude cartographie la déformation active de la croûte dans l'est de la République Démocratique du Congo, où une microplaque en cours de formation étire et fragmente la lithosphère. Les auteurs combinent données de terrain, sismicité et modélisation pour montrer comment ce processus d'extension continentale s'amorce à une échelle régionale.",
      en: "This study maps active crustal deformation in eastern Democratic Republic of Congo, where a nascent microplate is stretching and fragmenting the lithosphere. The authors combine field data, seismicity records and modelling to show how this continental extension process initiates at a regional scale.",
    },
  },
];

export const dansLesJournaux = [
  {
    titre: {
      fr: "Fracturation des roches : Hardy Nkodia mène une étude sur les deux Congo",
      en: "Rock fracturing: Hardy Nkodia leads a study on the two Congos",
    },
    media: "Agence d'Information d'Afrique Centrale (ADIAC)",
    date: "2019",
    url: "https://www.adiac-congo.com/content/fracturation-des-roches-hardy-nkodia-mene-une-etude-sur-les-deux-congo-108679",
    image: "/images/journal_depeche_2019.jpg",
  },
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
];

export const evenements = [
  {
    titre: {
      fr: "Colloque panafricain de géosciences — session « Tectonique du craton du Congo »",
      en: "Pan-African geosciences conference — session 'Congo craton tectonics'",
    },
    lieu: { fr: "Brazzaville, Congo", en: "Brazzaville, Congo" },
    date: "15–18 oct. 2026",
  },
  {
    titre: {
      fr: "École de terrain : analyse structurale du Mayombe (master 2 géosciences)",
      en: "Field school: structural analysis of the Mayombe belt (M2 geosciences)",
    },
    lieu: { fr: "Pointe-Noire & Mayombe", en: "Pointe-Noire & Mayombe" },
    date: "3–12 fév. 2026",
  },
  {
    titre: {
      fr: "Séminaire « Mécanique des roches et déformation continentale »",
      en: "Seminar 'Rock mechanics and continental deformation'",
    },
    lieu: { fr: "Université Marien Ngouabi, Brazzaville", en: "Marien Ngouabi University, Brazzaville" },
    date: "20 mai 2026",
  },
];

export const carrousel = [
  { src: "/images/carrousel-1.jpg", legende: { fr: "Plis isoclinaux dans les quartzites du Mayombe", en: "Isoclinal folds in Mayombe quartzites" } },
  { src: "/images/carrousel-2.jpg", legende: { fr: "Levé structural sur le terrain — vallée du Niari", en: "Structural field survey — Niari valley" } },
  { src: "/images/carrousel-3.jpg", legende: { fr: "Miroir de faille strié, bassin côtier congolais", en: "Striated fault mirror, Congolese coastal basin" } },
  { src: "/images/carrousel-4.jpg", legende: { fr: "Zone de cisaillement mylonitique, socle précambrien", en: "Mylonitic shear zone, Precambrian basement" } },
  { src: "/images/carrousel-5.jpg", legende: { fr: "Stéréogramme des fractures — campagne de mesures", en: "Fracture stereoplot — measurement campaign" } },
];

export const themesRecherche = [
  {
    titre: { fr: "Tectonique de la chaîne du Mayombe", en: "Tectonics of the Mayombe belt" },
    resume: {
      fr: "Analyse de la déformation polyphasée de la chaîne panafricaine du Mayombe : superposition de phases de plissement, zones de cisaillement ductile et reconstitution des trajectoires de contraintes.",
      en: "Analysis of polyphase deformation in the Pan-African Mayombe belt: superposition of folding phases, ductile shear zones and reconstruction of palaeostress trajectories.",
    },
  },
  {
    titre: { fr: "Réseaux de fractures et paléocontraintes", en: "Fracture networks and palaeostress" },
    resume: {
      fr: "Inversion des données de failles striées et des réseaux de joints pour reconstituer les champs de paléocontraintes successifs affectant le bassin sédimentaire côtier congolais.",
      en: "Inversion of slickenside fault data and joint networks to reconstruct successive palaeostress fields affecting the Congolese coastal sedimentary basin.",
    },
  },
  {
    titre: { fr: "Géologie structurale appliquée à l'aléa sismique", en: "Structural geology and seismic hazard" },
    resume: {
      fr: "Caractérisation des failles actives et de leur segmentation autour de Brazzaville en vue d'une meilleure évaluation de l'aléa sismotectonique régional.",
      en: "Characterisation of active faults and their segmentation around Brazzaville with a view to improved seismotectonic hazard assessment in the region.",
    },
  },
  {
    titre: { fr: "Mécanismes de déformation et microstructures", en: "Deformation mechanisms and microstructures" },
    resume: {
      fr: "Étude pétrographique et microtectonique des roches de faille et des mylonites pour contraindre les conditions pression-température de la déformation.",
      en: "Petrographic and microtectonic study of fault rocks and mylonites to constrain the pressure-temperature conditions of deformation.",
    },
  },
  {
    titre: { fr: "Géologie structurale et ressources", en: "Structural geology and resources" },
    resume: {
      fr: "Contrôle structural des minéralisations et des réservoirs : rôle des fractures et des zones de cisaillement dans la circulation des fluides crustaux.",
      en: "Structural control of mineralisations and reservoirs: the role of fractures and shear zones in crustal fluid circulation.",
    },
  },
];

export const equipe = [
  {
    nom: "Pr. Florent Boudzoumou",
    role: { fr: "Professeur titulaire — géologie du Précambrien", en: "Full Professor — Precambrian geology" },
    affiliation: "Université Marien Ngouabi",
    image: "/images/equipe-florent-boudzoumou.jpg",
  },
  {
    nom: "Pr. Damien Delvaux",
    role: { fr: "Collaborateur — tectonique & paléocontraintes", en: "Collaborator — tectonics & palaeostress" },
    affiliation: "Musée royal de l'Afrique centrale, Tervuren",
    image: "/images/equipe-damien-delvaux.jpg",
  },
  {
    nom: "Dr. Timothée Miyouna",
    role: { fr: "Maître de conférences — pétrologie & géodynamique", en: "Associate Professor — petrology & geodynamics" },
    affiliation: "Université Marien Ngouabi",
    image: "/images/equipe-miyouna-timothee.jpg",
  },
  {
    nom: "Nicy C. Bazebizonza Tchiguina",
    role: { fr: "Doctorante — géologie karstique & patrimoine géologique", en: "PhD candidate — karst geology & geoheritage" },
    affiliation: "Université Marien Ngouabi",
    image: "/images/equipe-nicy-bazebizonza.jpg",
  },
  {
    nom: "Pascale Lahogue",
    role: { fr: "Collaboratrice — karstologie & patrimoine géologique", en: "Collaborator — karstology & geoheritage" },
    affiliation: "Musée royal de l'Afrique centrale, Tervuren",
  },
  {
    nom: "Doctorant·e — analyse structurale",
    role: { fr: "Thèse en cours sous la direction du Dr. Nkodia", en: "PhD in progress under Dr. Nkodia's supervision" },
    affiliation: "École doctorale Sciences et Techniques, UMNg",
  },
];

export const cv = {
  infos: "27/07/1994 · Nationalité congolaise · Brazzaville, République du Congo",
  profil: {
    fr: "Géologue axé sur les résultats avec de solides compétences en analyse du style et des contraintes tectoniques des régions. Spécialités : Tectonique, Géologie structurale, Géodynamique, Géologie Régionale, Cartographie et SIG, Géologie de terrain, Communication et Recherche Scientifique.",
    en: "Results-driven geologist with strong expertise in the analysis of tectonic style and regional stress fields. Specialties: Tectonics, Structural Geology, Geodynamics, Regional Geology, Cartography and GIS, Field Geology, Scientific Communication and Research.",
  },
  education: [
    {
      periode: "Sept. 2023 – Janv. 2024",
      intitule: "Certificat professionnel en gestion de projet Google",
      lieu: "En ligne",
    },
    {
      periode: "Déc. 2023",
      intitule: "Certificat « Comment rédiger et publier un article scientifique »",
      lieu: "École Polytechnique de Paris (Enseignement par projet)",
    },
    {
      periode: "Nov. 2022",
      intitule: "Cartographie des zones humides",
      lieu: "Laboratoire de Télédétection et d'Écologie Forestière, École Normale Supérieure, République du Congo",
    },
    {
      periode: "2019 – 2024",
      intitule: "Doctorat en Géologie",
      lieu: "Université Marien Ngouabi, République du Congo",
      mention: "La plus haute distinction et les félicitations du jury · Majeure : géologie tectonique, géodynamique et structurale.",
    },
    {
      periode: "6–10 mai 2019",
      intitule: "Introduction à la Télédétection Radar",
      lieu: "IGNFI / Université Marien Ngouabi / AFD",
    },
    {
      periode: "2015 – 2017",
      intitule: "Master en Géosciences",
      lieu: "Université Marien Ngouabi, République du Congo",
      mention: "Diplômé premier de promotion.",
    },
    {
      periode: "2012 – 2015",
      intitule: "Licence en Géosciences",
      lieu: "Université Marien Ngouabi, République du Congo",
      mention: "Diplômé deuxième de promotion.",
    },
  ],
  competences: [
    "Cartographie SIG (QGIS)",
    "Win_Tensor — inversion des contraintes",
    "Analyse des paléocontraintes",
    "Analyse des mécanismes au foyer",
    "Télédétection (analyse SRTM)",
    "Analyse tectonique régionale",
    "Pétrologie (roches sédimentaires, magmatiques, métamorphiques)",
    "Illustration scientifique (Adobe Illustrator)",
    "Français et anglais (maîtrise)",
    "Gestion de projet, budgétisation et analyse des risques",
    "Word, Google Sheets, PowerPoint, Google Forms",
    "Programmation Python et analyse de données",
    "Logiciel R",
  ],
  experience: [
    {
      periode: "Mai 2025 – Mai 2026",
      poste: "PostDoc",
      institution: "Pukyong National University — Active Fault and Earthquake Hazard Mitigation Research Institute",
      lieu: "Busan, Corée du Sud",
      details: [
        "Recherche en paléoséismologie dans la péninsule coréenne.",
        "Mécanismes au foyer, inversion des contraintes et tranchées paléosismiques.",
      ],
    },
    {
      periode: "2025 – Présent",
      poste: "Enseignant-Chercheur",
      institution: "Université Marien Ngouabi, Faculté des Sciences et Technologies",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Cours magistraux en géologie structurale.",
        "Travaux de laboratoire en pétrologie et minéralogie.",
        "Camp de terrain de cartographie géologique.",
      ],
    },
    {
      periode: "2024 – Présent",
      poste: "Promoteur – Directeur Général",
      institution: "Complexe Scolaire Professeur Dieu-Veille",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Création et lancement de l'école Professeur Dieu-Veille.",
        "Organisation du programme scolaire.",
        "Taux d'inscription à 80 % des effectifs maximaux.",
      ],
    },
    {
      periode: "2019 – Présent",
      poste: "Chef de projet — Fondateur",
      institution: "Association Kongo Science",
      lieu: "République du Congo",
      details: [
        "Fondateur de l'association visant à renforcer les compétences des chercheurs africains.",
        "Promotion du développement scientifique en Afrique.",
      ],
    },
    {
      periode: "2018 – 2024",
      poste: "Enseignant Vacataire",
      institution: "Université Marien Ngouabi, Faculté des Sciences et Technologies",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Cours magistraux en géologie structurale.",
        "Travaux de laboratoire en pétrologie et minéralogie.",
        "Camp de terrain de cartographie géologique.",
        "Organisation et planification d'une conférence géologique internationale.",
      ],
    },
    {
      periode: "2019 – 2024",
      poste: "Doctorant",
      institution: "Université Marien Ngouabi & Musée royal de l'Afrique centrale (MRAC)",
      lieu: "Brazzaville, République du Congo / Tervuren, Belgique",
      details: [
        "Dir. : Florent Boudzoumou (UMNg) & Damien Delvaux (MRAC).",
        "Thèse : Évolution tectono-structurale et déformation cassante dans la Chaîne de l'Ouest du Congo et son Avant-Pays (RdC & RDC).",
        "Découverte des phases tectoniques depuis le Néoprotérozoïque jusqu'à nos jours.",
        "Gestion d'un budget de 15 000 € sur 3 ans.",
      ],
    },
    {
      periode: "2021 – 2024",
      poste: "Assistant de recherche — Karst & failles",
      institution: "Musée royal de l'Afrique Centrale (MRAC)",
      lieu: "Tervuren, Belgique",
      details: [
        "Superviseurs : Pascale Lahogue, Damien Delvaux.",
        "Cartographie des systèmes de grottes et analyse des failles (RdC & RDC).",
      ],
    },
    {
      periode: "2021 – 2023",
      poste: "Assistant de recherche — Encadrement doctoral",
      institution: "Université Marien Ngouabi",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Superviseur : Florent Boudzoumou.",
        "Encadrement de deux doctorants en analyse structurale et Win_Tensor.",
      ],
    },
    {
      periode: "2019 – 2023",
      poste: "Assistant de recherche — Groupe Inkisi",
      institution: "Université Marien Ngouabi",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Superviseurs : Timothée Miyouna, Florent Boudzoumou, Damien Delvaux.",
        "Analyse sédimentologique et paléocourants des arkoses du Groupe Inkisi.",
      ],
    },
    {
      periode: "Mai 2019 – Janv. 2021",
      poste: "Enseignant",
      institution: "École Africaine de Développement (EAD)",
      lieu: "République du Congo",
      details: ["Introduction du cours de géologie structurale dans le programme académique."],
    },
    {
      periode: "2020",
      poste: "Assistant de recherche — COVID-19",
      institution: "Université Marien Ngouabi",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Étude des caractéristiques épidémiologiques et dynamique spatio-temporelle de la pandémie de COVID-19 en République du Congo.",
      ],
    },
    {
      periode: "2017 – 2019",
      poste: "Enseignant (SVT, collège & lycée)",
      institution: "Complexe Scolaire Salutiste John Larson",
      lieu: "République du Congo",
      details: [],
    },
    {
      periode: "2016 – 2019",
      poste: "Enseignant (SVT, collège & lycée)",
      institution: "Complexe Scolaire Saint Philippe Biab",
      lieu: "République du Congo",
      details: [],
    },
    {
      periode: "2017 – 2018",
      poste: "Assistant de recherche — encadrement MSc",
      institution: "Université Marien Ngouabi",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Superviseur : Miyouna Timothée.",
        "Encadrement de deux étudiants MSc sur l'architecture des failles et la cartographie des linéaments.",
      ],
    },
    {
      periode: "2016 – 2017",
      poste: "Mémoire de Master",
      institution: "Université Marien Ngouabi",
      lieu: "Brazzaville, République du Congo",
      details: [
        "Superviseur : Miyouna Timothée.",
        "Titre : Style tectonique du Groupe Inkisi en République du Congo.",
        "Découverte de deux phases de tectonique de décrochement affectant le Groupe Inkisi.",
      ],
    },
  ],
  distinctions: [
    "Certificat d'excellent stagiaire — Centre international de recherche sur le karst (UNESCO / China Geological Survey / IUGS / IGCP), 13ᵉ cours international sur le karst et le développement durable, 15–26 novembre 2021.",
    "Soutien financier du projet AGATE — participation au 37ᵉ Congrès Géologique International (IGC), Busan, Corée, août 2024.",
    "Bénéficiaire GeoHost — invitation au 37ᵉ IGC (Busan, août 2024) : transport, hébergement et frais locaux couverts.",
    "Bourse de doctorat GeoRes4Dev — Musée Royal de l'Afrique Centrale (Tervuren, Belgique), 4 ans, incluant des séjours annuels de 6 semaines en Belgique.",
    "Prix de l'APEC — Parmi les 10 meilleurs élèves de la République du Congo à l'obtention du baccalauréat.",
  ],
};
