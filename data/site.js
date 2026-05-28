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
      fr: "Séjour de recherche invité — Musée Royal de l'Afrique Centrale (MRAC)",
      en: "Invited research stay — Royal Museum for Central Africa (MRAC)",
    },
    lieu: { fr: "Tervuren, Belgique", en: "Tervuren, Belgium" },
    date: "Été 2026",
  },
  {
    titre: {
      fr: "Terrain géologique — Gabon",
      en: "Geological fieldwork — Gabon",
    },
    lieu: { fr: "Gabon", en: "Gabon" },
    date: "2026",
  },
  {
    titre: {
      fr: "Terrain géologique — Angola",
      en: "Geological fieldwork — Angola",
    },
    lieu: { fr: "Angola", en: "Angola" },
    date: "2026",
  },
  {
    titre: {
      fr: "Étude structurale de la chaîne du Mayombe — République du Congo",
      en: "Structural study of the Mayombe belt — Republic of the Congo",
    },
    lieu: { fr: "Mayombe, République du Congo", en: "Mayombe, Republic of the Congo" },
    date: "2026",
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

const ACT_BASE  = "/images/Actualit%C3%A9s";
const FW_BASE   = `${ACT_BASE}/Actualit%C3%A9_Fieldwork_2025-02-04`;
const CONF_BASE = `${ACT_BASE}/Actualit%C3%A9_conference_geologica_belgica_2021`;

export const actualites = [
  {
    id: "terrain-belgique-france-2025",
    type: "fieldwork",
    titre: {
      fr: "Terrain structural — Belgique & France",
      en: "Structural fieldwork — Belgium & France",
    },
    sousTitre: {
      fr: "Avec le Pr. Damien Delvaux · Ardennes, zone rhéno-hercynienne",
      en: "With Prof. Damien Delvaux · Ardennes, Rhenohercynian zone",
    },
    cover: `${FW_BASE}/Kink_folds_fieldwork_belguim_france_20250224jpg.jpg`,
    date: "Février 2025",
    lieu: {
      fr: "Belgique — France (Ardennes / zone rhéno-hercynienne)",
      en: "Belgium — France (Ardennes / Rhenohercynian zone)",
    },
    description: {
      fr: "En février 2025, le Dr. Hardy Nkodia a participé à une mission de terrain en géologie structurale dans les Ardennes belgo-françaises, en collaboration avec le Pr. Damien Delvaux (Musée Royal de l'Afrique Centrale, Tervuren, Belgique). Cette région, classique de l'orogenèse varisque, offre des affleurements remarquables permettant d'observer et d'analyser une grande variété de structures tectoniques cassantes et ductiles.\n\nLa mission a permis de documenter des failles inverses à schistosité en sigmoïdes témoignant de compressions anciennes, des plis couchés et des plis en genou (kink folds) issus de la déformation polyphasée des roches sédimentaires. Les miroirs de faille présentent des gradins de calcite et des stries multiples, témoignant de réactivations successives lors d'épisodes tectoniques distincts. Le contact entre l'orogenèse calédonienne et varisque a également été documenté à partir de la lecture collective des coupes géologiques régionales.\n\nCe terrain de comparaison avec les structures africaines constitue une référence précieuse pour les travaux menés dans la chaîne du Mayombe et le bassin côtier congolais.",
      en: "In February 2025, Dr. Hardy Nkodia took part in a structural geology field campaign in the Belgian-French Ardennes, in collaboration with Prof. Damien Delvaux (Royal Museum for Central Africa, Tervuren, Belgium). This region, a classic area for Variscan orogeny research, offers exceptional outcrops for observing and analysing a wide range of brittle and ductile tectonic structures.\n\nThe campaign documented reverse faults with sigmoid schistosity reflecting ancient compressional episodes, along with recumbent folds and kink folds resulting from polyphase deformation of sedimentary rocks. Observed fault mirrors display calcite steps and multiple sets of striations, recording successive reactivations during distinct tectonic episodes. The contact between Caledonian and Variscan orogenic imprints was also documented through collective reading of regional geological cross-sections.\n\nThis comparative fieldwork provides a valuable reference for ongoing structural research in the Mayombe belt and the Congolese coastal basin.",
    },
    images: [
      {
        src: `${FW_BASE}/Depart_lecture_du_plande_coupe.jpg`,
        legende: {
          fr: "Départ : lecture collective du plan de coupe régionale",
          en: "Departure: collective reading of the regional cross-section",
        },
      },
      {
        src: `${FW_BASE}/Dans_la_voiture_avec_lequipe.jpg`,
        legende: {
          fr: "L'équipe en route vers le premier affleurement",
          en: "Team on the way to the first outcrop",
        },
      },
      {
        src: `${FW_BASE}/Dans_lavoiture_avec_lequipe.jpg`,
        legende: {
          fr: "Transit entre affleurements",
          en: "In transit between outcrops",
        },
      },
      {
        src: `${FW_BASE}/Field_work_Belguim_france_reverse_fault.jpg`,
        legende: {
          fr: "Faille inverse — terrain Belgique–France",
          en: "Reverse fault — Belgium–France fieldwork",
        },
      },
      {
        src: `${FW_BASE}/Field_work_france_belgique_damien_delvaux_reverse_fault.jpg`,
        legende: {
          fr: "Analyse de faille inverse avec le Pr. Damien Delvaux",
          en: "Reverse fault analysis with Prof. Damien Delvaux",
        },
      },
      {
        src: `${FW_BASE}/faille_inverse_horizontale_separant_la%20schistosit%C3%A9%20en%20Sigmoides.jpg`,
        legende: {
          fr: "Faille inverse horizontale séparant la schistosité en sigmoïdes",
          en: "Horizontal reverse fault separating schistosity into sigmoids",
        },
      },
      {
        src: `${FW_BASE}/Kink_folds_fieldwork_belguim_france_20250224jpg.jpg`,
        legende: {
          fr: "Plis en genou (kink folds) — Ardennes, 24 fév. 2025",
          en: "Kink folds — Ardennes, 24 Feb. 2025",
        },
      },
      {
        src: `${FW_BASE}/Plis-couch%C3%A9-axe-duPlisPartmamain.jpg`,
        legende: {
          fr: "Axe du pli couché mesuré à la main",
          en: "Recumbent fold axis measured by hand",
        },
      },
      {
        src: `${FW_BASE}/field_work_orogenese_varisque.jpg`,
        legende: {
          fr: "Structures de l'orogenèse varisque",
          en: "Variscan orogeny structures",
        },
      },
      {
        src: `${FW_BASE}/Fiel_work_damien_delvaux_2025-02-24_contact-orogense_caledonienne_varisque_plan%20de%20la%20coupe.jpg`,
        legende: {
          fr: "Contact orogenèse calédonienne–varisque : lecture du plan de coupe avec D. Delvaux",
          en: "Caledonian–Variscan orogenic contact: reading the section plan with D. Delvaux",
        },
      },
      {
        src: `${FW_BASE}/Faille%20avec%20gradin%20de%20calcite%20et%20sitrie%20oblique%20Belgique_faille%20normale%20oblique.jpg`,
        legende: {
          fr: "Faille normale oblique avec gradins de calcite et stries obliques",
          en: "Oblique normal fault with calcite steps and oblique striations",
        },
      },
      {
        src: `${FW_BASE}/Stries_multiples_reactivations.jpg`,
        legende: {
          fr: "Stries de faille témoignant de réactivations multiples",
          en: "Fault striations recording multiple tectonic reactivations",
        },
      },
      {
        src: `${FW_BASE}/Coupe-france-belique_plis-contact-avecFaillejpg.jpg`,
        legende: {
          fr: "Coupe structurale : plis et contact avec faille — France–Belgique",
          en: "Structural cross-section: folds and fault contact — France–Belgium",
        },
      },
    ],
  },
  {
    id: "conference-geologica-belgica-2021",
    type: "conference",
    titre: {
      fr: "Conférence Geologica Belgica 2021",
      en: "Geologica Belgica 2021 Conference",
    },
    sousTitre: {
      fr: "Communication scientifique — Belgique, 15–17 septembre 2021",
      en: "Scientific communication — Belgium, 15–17 September 2021",
    },
    cover: `${CONF_BASE}/IMG_20210916_135254.jpg`,
    date: "Septembre 2021",
    lieu: {
      fr: "Belgique",
      en: "Belgium",
    },
    description: {
      fr: "Du 15 au 17 septembre 2021, le Dr. Hardy Nkodia a participé à la conférence internationale Geologica Belgica, tenue en Belgique, où il a présenté ses recherches sur la tectonique de la chaîne de l'Ouest du Congo et la sismicité en Afrique centrale.\n\nCette communication portait sur la déformation cassante de la marge passive congolaise et son rôle dans l'aléa sismotectonique régional — travaux menés dans le cadre de sa thèse de doctorat en collaboration avec le Musée Royal de l'Afrique Centrale (Tervuren), qui a financé sa participation.\n\nCette conférence a également été l'occasion de rencontres scientifiques fructueuses, notamment avec le Dr. Thierry Camelbeeck, spécialiste de la sismicité en Afrique centrale à l'Observatoire Royal de Belgique, et avec le géologue Joseph Akame.",
      en: "From 15 to 17 September 2021, Dr. Hardy Nkodia participated in the international Geologica Belgica conference, held in Belgium, where he presented his research on the tectonics of the West Congo belt and seismicity in Central Africa.\n\nThe communication focused on brittle deformation along the Congolese passive margin and its role in regional seismotectonic hazard — research conducted as part of his doctoral thesis in collaboration with the Royal Museum for Central Africa (Tervuren), which funded his participation.\n\nThe conference also provided valuable scientific exchanges, notably with Dr. Thierry Camelbeeck, specialist in Central African seismicity at the Royal Observatory of Belgium, and with geologist Joseph Akame.",
    },
    images: [
      {
        src: `${CONF_BASE}/15-17septmbre_.jpg`,
        legende: {
          fr: "Programme et affiche — Geologica Belgica, 15–17 septembre 2021",
          en: "Programme and poster — Geologica Belgica, 15–17 September 2021",
        },
      },
      {
        src: `${CONF_BASE}/IMG_20210916_135254.jpg`,
        legende: {
          fr: "Présentation à la conférence Geologica Belgica",
          en: "Presentation at the Geologica Belgica conference",
        },
      },
      {
        src: `${CONF_BASE}/Photo%20avec%20Thierry%20Camelbeek.jpg`,
        legende: {
          fr: "Rencontre avec le Dr. Thierry Camelbeeck (Observatoire Royal de Belgique)",
          en: "Meeting with Dr. Thierry Camelbeeck (Royal Observatory of Belgium)",
        },
      },
      {
        src: `${CONF_BASE}/Recontre%20avec%20Joseph%20Akame%20Belgique.jpg`,
        legende: {
          fr: "Rencontre avec le géologue Joseph Akame, Belgique",
          en: "Meeting with geologist Joseph Akame, Belgium",
        },
      },
    ],
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
      intitule: { fr: "Certificat professionnel en gestion de projet Google", en: "Google Project Management Professional Certificate" },
      lieu: { fr: "En ligne", en: "Online" },
    },
    {
      periode: "Déc. 2023",
      intitule: { fr: "Certificat « Comment rédiger et publier un article scientifique »", en: "Certificate 'How to write and publish a scientific article'" },
      lieu: { fr: "École Polytechnique de Paris (Enseignement par projet)", en: "École Polytechnique de Paris (Project-based learning)" },
    },
    {
      periode: "Nov. 2022",
      intitule: { fr: "Cartographie des zones humides", en: "Wetland mapping" },
      lieu: { fr: "Laboratoire de Télédétection et d'Écologie Forestière, École Normale Supérieure, République du Congo", en: "Remote Sensing and Forest Ecology Laboratory, École Normale Supérieure, Republic of the Congo" },
    },
    {
      periode: "2019 – 2024",
      intitule: { fr: "Doctorat en Géologie", en: "PhD in Geology" },
      lieu: { fr: "Université Marien Ngouabi, République du Congo", en: "Marien Ngouabi University, Republic of the Congo" },
      mention: { fr: "La plus haute distinction et les félicitations du jury · Majeure : géologie tectonique, géodynamique et structurale.", en: "Highest distinction with congratulations from the jury · Major: tectonic geology, geodynamics and structural geology." },
    },
    {
      periode: "6–10 mai 2019",
      intitule: { fr: "Introduction à la Télédétection Radar", en: "Introduction to Radar Remote Sensing" },
      lieu: { fr: "IGNFI / Université Marien Ngouabi / AFD", en: "IGNFI / Marien Ngouabi University / AFD" },
    },
    {
      periode: "2015 – 2017",
      intitule: { fr: "Master en Géosciences", en: "Master's degree in Geosciences" },
      lieu: { fr: "Université Marien Ngouabi, République du Congo", en: "Marien Ngouabi University, Republic of the Congo" },
      mention: { fr: "Diplômé premier de promotion.", en: "Graduated top of class." },
    },
    {
      periode: "2012 – 2015",
      intitule: { fr: "Licence en Géosciences", en: "Bachelor's degree in Geosciences" },
      lieu: { fr: "Université Marien Ngouabi, République du Congo", en: "Marien Ngouabi University, Republic of the Congo" },
      mention: { fr: "Diplômé deuxième de promotion.", en: "Graduated second in class." },
    },
  ],
  competences: [
    { fr: "Cartographie SIG (QGIS)", en: "GIS mapping (QGIS)" },
    { fr: "Win_Tensor — inversion des contraintes", en: "Win_Tensor — stress inversion" },
    { fr: "Analyse des paléocontraintes", en: "Palaeostress analysis" },
    { fr: "Analyse des mécanismes au foyer", en: "Focal mechanism analysis" },
    { fr: "Télédétection (analyse SRTM)", en: "Remote sensing (SRTM analysis)" },
    { fr: "Analyse tectonique régionale", en: "Regional tectonic analysis" },
    { fr: "Pétrologie (roches sédimentaires, magmatiques, métamorphiques)", en: "Petrology (sedimentary, igneous, metamorphic rocks)" },
    { fr: "Illustration scientifique (Adobe Illustrator)", en: "Scientific illustration (Adobe Illustrator)" },
    { fr: "Français et anglais (maîtrise)", en: "French and English (proficient)" },
    { fr: "Gestion de projet, budgétisation et analyse des risques", en: "Project management, budgeting and risk analysis" },
    { fr: "Word, Google Sheets, PowerPoint, Google Forms", en: "Word, Google Sheets, PowerPoint, Google Forms" },
    { fr: "Programmation Python et analyse de données", en: "Python programming and data analysis" },
    { fr: "Logiciel R", en: "R software" },
  ],
  experience: [
    {
      periode: "Mai 2025 – Mai 2026",
      poste: { fr: "PostDoc", en: "Postdoctoral Researcher" },
      institution: "Pukyong National University — Active Fault and Earthquake Hazard Mitigation Research Institute",
      lieu: { fr: "Busan, Corée du Sud", en: "Busan, South Korea" },
      details: [
        { fr: "Recherche en paléoséismologie dans la péninsule coréenne.", en: "Palaeoseismology research on the Korean peninsula." },
        { fr: "Mécanismes au foyer, inversion des contraintes et tranchées paléosismiques.", en: "Focal mechanisms, stress inversion and palaeoseismic trenching." },
      ],
    },
    {
      periode: "2025 – Présent",
      poste: { fr: "Enseignant-Chercheur", en: "Lecturer-Researcher" },
      institution: "Université Marien Ngouabi, Faculté des Sciences et Technologies",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Cours magistraux en géologie structurale.", en: "Lectures in structural geology." },
        { fr: "Travaux de laboratoire en pétrologie et minéralogie.", en: "Laboratory work in petrology and mineralogy." },
        { fr: "Camp de terrain de cartographie géologique.", en: "Geological mapping field camp." },
      ],
    },
    {
      periode: "2024 – Présent",
      poste: { fr: "Promoteur – Directeur Général", en: "Founder – General Director" },
      institution: "Complexe Scolaire Professeur Dieu-Veille",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Création et lancement de l'école Professeur Dieu-Veille.", en: "Creation and launch of the Professeur Dieu-Veille school." },
        { fr: "Organisation du programme scolaire.", en: "Organisation of the academic programme." },
        { fr: "Taux d'inscription à 80 % des effectifs maximaux.", en: "Enrolment rate at 80 % of maximum capacity." },
      ],
    },
    {
      periode: "2019 – Présent",
      poste: { fr: "Chef de projet — Fondateur", en: "Project Lead — Founder" },
      institution: "Association Kongo Science",
      lieu: { fr: "République du Congo", en: "Republic of the Congo" },
      details: [
        { fr: "Fondateur de l'association visant à renforcer les compétences des chercheurs africains.", en: "Founder of the association aimed at strengthening the skills of African researchers." },
        { fr: "Promotion du développement scientifique en Afrique.", en: "Promotion of scientific development in Africa." },
      ],
    },
    {
      periode: "2018 – 2024",
      poste: { fr: "Enseignant Vacataire", en: "Adjunct Lecturer" },
      institution: "Université Marien Ngouabi, Faculté des Sciences et Technologies",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Cours magistraux en géologie structurale.", en: "Lectures in structural geology." },
        { fr: "Travaux de laboratoire en pétrologie et minéralogie.", en: "Laboratory work in petrology and mineralogy." },
        { fr: "Camp de terrain de cartographie géologique.", en: "Geological mapping field camp." },
        { fr: "Organisation et planification d'une conférence géologique internationale.", en: "Organisation and planning of an international geological conference." },
      ],
    },
    {
      periode: "2019 – 2024",
      poste: { fr: "Doctorant", en: "PhD Student" },
      institution: "Université Marien Ngouabi & Musée royal de l'Afrique centrale (MRAC)",
      lieu: { fr: "Brazzaville, République du Congo / Tervuren, Belgique", en: "Brazzaville, Republic of the Congo / Tervuren, Belgium" },
      details: [
        { fr: "Dir. : Florent Boudzoumou (UMNg) & Damien Delvaux (MRAC).", en: "Supervisors: Florent Boudzoumou (UMNg) & Damien Delvaux (MRAC)." },
        { fr: "Thèse : Évolution tectono-structurale et déformation cassante dans la Chaîne de l'Ouest du Congo et son Avant-Pays (RdC & RDC).", en: "Thesis: Tectono-structural evolution and brittle deformation in the West Congo Belt and its Foreland (Rep. of Congo & DR Congo)." },
        { fr: "Découverte des phases tectoniques depuis le Néoprotérozoïque jusqu'à nos jours.", en: "Discovery of tectonic phases from the Neoproterozoic to the present day." },
        { fr: "Gestion d'un budget de 15 000 € sur 3 ans.", en: "Management of a €15,000 budget over 3 years." },
      ],
    },
    {
      periode: "2021 – 2024",
      poste: { fr: "Assistant de recherche — Karst & failles", en: "Research Assistant — Karst & faults" },
      institution: "Musée royal de l'Afrique Centrale (MRAC)",
      lieu: { fr: "Tervuren, Belgique", en: "Tervuren, Belgium" },
      details: [
        { fr: "Superviseurs : Pascale Lahogue, Damien Delvaux.", en: "Supervisors: Pascale Lahogue, Damien Delvaux." },
        { fr: "Cartographie des systèmes de grottes et analyse des failles (RdC & RDC).", en: "Cave system mapping and fault analysis (Rep. of Congo & DR Congo)." },
      ],
    },
    {
      periode: "2021 – 2023",
      poste: { fr: "Assistant de recherche — Encadrement doctoral", en: "Research Assistant — Doctoral supervision" },
      institution: "Université Marien Ngouabi",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Superviseur : Florent Boudzoumou.", en: "Supervisor: Florent Boudzoumou." },
        { fr: "Encadrement de deux doctorants en analyse structurale et Win_Tensor.", en: "Supervision of two PhD students in structural analysis and Win_Tensor." },
      ],
    },
    {
      periode: "2019 – 2023",
      poste: { fr: "Assistant de recherche — Groupe Inkisi", en: "Research Assistant — Inkisi Group" },
      institution: "Université Marien Ngouabi",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Superviseurs : Timothée Miyouna, Florent Boudzoumou, Damien Delvaux.", en: "Supervisors: Timothée Miyouna, Florent Boudzoumou, Damien Delvaux." },
        { fr: "Analyse sédimentologique et paléocourants des arkoses du Groupe Inkisi.", en: "Sedimentological analysis and palaeocurrent study of Inkisi Group arkoses." },
      ],
    },
    {
      periode: "Mai 2019 – Janv. 2021",
      poste: { fr: "Enseignant", en: "Teacher" },
      institution: "École Africaine de Développement (EAD)",
      lieu: { fr: "République du Congo", en: "Republic of the Congo" },
      details: [{ fr: "Introduction du cours de géologie structurale dans le programme académique.", en: "Introduction of structural geology course into the academic programme." }],
    },
    {
      periode: "2020",
      poste: { fr: "Assistant de recherche — COVID-19", en: "Research Assistant — COVID-19" },
      institution: "Université Marien Ngouabi",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Étude des caractéristiques épidémiologiques et dynamique spatio-temporelle de la pandémie de COVID-19 en République du Congo.", en: "Study of the epidemiological characteristics and spatio-temporal dynamics of the COVID-19 pandemic in the Republic of the Congo." },
      ],
    },
    {
      periode: "2017 – 2019",
      poste: { fr: "Enseignant (SVT, collège & lycée)", en: "Teacher (Life & Earth Sciences, secondary school)" },
      institution: "Complexe Scolaire Salutiste John Larson",
      lieu: { fr: "République du Congo", en: "Republic of the Congo" },
      details: [],
    },
    {
      periode: "2016 – 2019",
      poste: { fr: "Enseignant (SVT, collège & lycée)", en: "Teacher (Life & Earth Sciences, secondary school)" },
      institution: "Complexe Scolaire Saint Philippe Biab",
      lieu: { fr: "République du Congo", en: "Republic of the Congo" },
      details: [],
    },
    {
      periode: "2017 – 2018",
      poste: { fr: "Assistant de recherche — encadrement MSc", en: "Research Assistant — MSc supervision" },
      institution: "Université Marien Ngouabi",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Superviseur : Miyouna Timothée.", en: "Supervisor: Miyouna Timothée." },
        { fr: "Encadrement de deux étudiants MSc sur l'architecture des failles et la cartographie des linéaments.", en: "Supervision of two MSc students on fault architecture and lineament mapping." },
      ],
    },
    {
      periode: "2016 – 2017",
      poste: { fr: "Mémoire de Master", en: "Master's Thesis" },
      institution: "Université Marien Ngouabi",
      lieu: { fr: "Brazzaville, République du Congo", en: "Brazzaville, Republic of the Congo" },
      details: [
        { fr: "Superviseur : Miyouna Timothée.", en: "Supervisor: Miyouna Timothée." },
        { fr: "Titre : Style tectonique du Groupe Inkisi en République du Congo.", en: "Title: Tectonic style of the Inkisi Group in the Republic of the Congo." },
        { fr: "Découverte de deux phases de tectonique de décrochement affectant le Groupe Inkisi.", en: "Discovery of two strike-slip tectonic phases affecting the Inkisi Group." },
      ],
    },
  ],
  distinctions: [
    { fr: "Certificat d'excellent stagiaire — Centre international de recherche sur le karst (UNESCO / China Geological Survey / IUGS / IGCP), 13ᵉ cours international sur le karst et le développement durable, 15–26 novembre 2021.", en: "Certificate of excellence — International Research Centre on Karst (UNESCO / China Geological Survey / IUGS / IGCP), 13th International Training Course on Karst and Sustainable Development, 15–26 November 2021." },
    { fr: "Soutien financier du projet AGATE — participation au 37ᵉ Congrès Géologique International (IGC), Busan, Corée, août 2024.", en: "Financial support from the AGATE project — participation in the 37th International Geological Congress (IGC), Busan, Korea, August 2024." },
    { fr: "Bénéficiaire GeoHost — invitation au 37ᵉ IGC (Busan, août 2024) : transport, hébergement et frais locaux couverts.", en: "GeoHost awardee — invitation to the 37th IGC (Busan, August 2024): transport, accommodation and local expenses covered." },
    { fr: "Bourse de doctorat GeoRes4Dev — Musée Royal de l'Afrique Centrale (Tervuren, Belgique), 4 ans, incluant des séjours annuels de 6 semaines en Belgique.", en: "GeoRes4Dev doctoral fellowship — Royal Museum for Central Africa (Tervuren, Belgium), 4 years, including annual 6-week stays in Belgium." },
    { fr: "Prix de l'APEC — Parmi les 10 meilleurs élèves de la République du Congo à l'obtention du baccalauréat.", en: "APEC Prize — Among the top 10 students in the Republic of the Congo at the baccalaureate." },
  ],
};
