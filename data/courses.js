/**
 * Catalogue des cours. Pour ajouter un nouveau cours :
 *  1. créer ses quiz JSON dans data/quizzes/ ;
 *  2. ajouter une entrée dans data/drive-links.json (identifiant du PDF) ;
 *  3. ajouter un objet dans le tableau `courses` ci-dessous.
 */

import driveLinks from "./drive-links.json";

import ch1 from "./quizzes/chapitre1.json";
import ch2 from "./quizzes/chapitre2.json";
import ch3 from "./quizzes/chapitre3.json";
import ch4 from "./quizzes/chapitre4.json";
import ch5 from "./quizzes/chapitre5.json";
import ch6 from "./quizzes/chapitre6.json";

import tp1 from "./quizzes/tp-tectonique-1.json";
import tp2 from "./quizzes/tp-tectonique-2.json";
import tp3 from "./quizzes/tp-tectonique-3.json";
import tp4 from "./quizzes/tp-tectonique-4.json";

/** Construit les URL Google Drive à partir d'un identifiant de fichier. */
export function driveUrls(fileId) {
  const placeholder = !fileId || fileId.startsWith("REMPLACER");
  return {
    placeholder,
    preview: placeholder ? null : `https://drive.google.com/file/d/${fileId}/preview`,
    download: placeholder
      ? null
      : `https://drive.google.com/uc?export=download&id=${fileId}`,
  };
}

export const courses = [
  {
    slug: "geologie-structurale",
    titre: "Géologie Structurale",
    niveau: "Licence — 2e année",
    sigle: "GS",
    resume:
      "Cours fondamental : analyse de la déformation des roches, des structures primaires jusqu'aux déformations ductiles.",
    intro:
      "Ce cours présente les bases de l'analyse structurale : description, cinématique et dynamique de la déformation des roches, depuis l'échelle de l'affleurement jusqu'à celle de la chaîne de montagnes.",
    fileId: driveLinks["geologie-structurale"].fileId,
    labelSection: "Chapitre",
    titreZoneB: "Quiz par chapitre",
    sections: [
      {
        num: 1,
        titre: "Introduction et méthodologie de la géologie structurale",
        themes:
          "Définition de la géologie structurale et d'une structure géologique, échelles d'observation, principes de l'analyse structurale et autres méthodes d'investigation.",
        quiz: ch1,
      },
      {
        num: 2,
        titre: "Les structures primaires",
        themes:
          "Stratification et polarité sédimentaire verticale, surfaces de discordance, structures de compaction et de diagénèse, structures salifères et structures associées aux roches ignées.",
        quiz: ch2,
      },
      {
        num: 3,
        titre: "Notions de mécanique : forces et contraintes",
        themes:
          "Notions de déformation et de contrainte, méthodes d'étude des contraintes, cercle et diagramme de Mohr, types de déformation.",
        quiz: ch3,
      },
      {
        num: 4,
        titre: "La rhéologie et les mécanismes de déformation",
        themes:
          "Taux de déformation, comportements rhéologiques fondamentaux et modèles combinés, mécanismes fragiles et ductiles, influence des paramètres externes et transition fragile-ductile.",
        quiz: ch4,
      },
      {
        num: 5,
        titre: "Les structures secondaires",
        themes:
          "Joints, structures en plumes, veines, anatomie et classification des failles, marqueurs cinématiques, roches de faille et régimes normal, décrochant et compressif.",
        quiz: ch5,
      },
      {
        num: 6,
        titre: "Les déformations ductiles",
        themes:
          "Nomenclature et classification des plis (Ramsay 1967), mécanismes de plissement actif et passif, interférences de plis, stylolithes, schistosités, linéations et zones de cisaillement.",
        quiz: ch6,
      },
    ],
    exercices: [
      {
        titre: "Le ravin du Djoué",
        enonce:
          "Dans le ravin du Djoué, au sud de Brazzaville, des grès subhorizontaux reposent sur des schistes redressés tronqués par l'érosion. Quel type de contact sépare ces deux ensembles et qu'en déduire sur l'histoire géologique du site ?",
        corrige:
          "Le contact est une discordance angulaire. Les schistes ont d'abord été déformés (plissement, basculement) puis érodés ; les grès subhorizontaux se sont ensuite déposés sur cette surface d'érosion. La discordance enregistre donc une phase de déformation et d'érosion intercalée : les schistes sont les plus anciens, les grès les plus récents.",
      },
      {
        titre: "Les forages de Mpila et de Kintélé",
        enonce:
          "Deux forages verticaux, à Mpila et à Kintélé, distants de 4 km, recoupent un même banc repère de calcaire. Le banc est atteint à 120 m de profondeur à Mpila et à 320 m à Kintélé. En supposant le terrain non faillé entre les deux forages, déterminer le pendage apparent de la couche.",
        corrige:
          "La couche s'enfonce de 320 − 120 = 200 m sur une distance horizontale de 4 000 m. Le pendage apparent vaut arctan(200 / 4 000) = arctan(0,05) ≈ 2,9°, soit environ 3°, incliné vers Kintélé. Une rupture brutale de profondeur sur un forage intermédiaire conduirait au contraire à interpréter un rejet de faille.",
      },
      {
        titre: "La paroi du Mayombe",
        enonce:
          "Sur une paroi de la chaîne du Mayombe, un banc de quartzite compétent est plissé. On mesure le pendage des deux flancs : 40° vers l'WNW et 50° vers l'ESE. Déterminer l'angle d'ouverture du pli, l'orientation approximative du plan axial et classer le pli.",
        corrige:
          "Les flancs convergent vers le haut : il s'agit d'un antiforme. L'angle d'ouverture (interlimb) ≈ 180° − (40° + 50°) = 90° : le pli est ouvert à fermé. Le plan axial bissecte l'angle entre les flancs ; les pendages étant proches (40° et 50°), il est subvertical, légèrement penté vers l'ESE. La charnière est subhorizontale, orientée NNE-SSW, perpendiculairement au raccourcissement WNW-ESE.",
      },
    ],
  },
  {
    slug: "tp-tectonique",
    titre: "TP de Tectonique",
    niveau: "Travaux pratiques",
    sigle: "TP",
    resume:
      "Séances de travaux pratiques : projection stéréographique, coupes, cartes structurales et analyse des failles.",
    intro:
      "Ce module de travaux pratiques met en application les outils de la tectonique : projection stéréographique, construction de coupes, lecture de cartes structurales et reconstitution des paléocontraintes.",
    fileId: driveLinks["tp-tectonique"].fileId,
    labelSection: "Séance",
    titreZoneB: "Quiz par séance",
    sections: [
      {
        num: 1,
        titre: "Projection stéréographique",
        themes:
          "Canevas de Wulff et de Schmidt, représentation des plans et des droites, lecture des pendages.",
        quiz: tp1,
      },
      {
        num: 2,
        titre: "Coupes géologiques et règle des « V »",
        themes:
          "Échelle, pendage réel et apparent, règle des « V » dans les vallées, épaisseur vraie d'une couche.",
        quiz: tp2,
      },
      {
        num: 3,
        titre: "Lecture et interprétation des cartes structurales",
        themes:
          "Reconnaissance des plis et des failles sur carte, axes de plis, rejets, discordances.",
        quiz: tp3,
      },
      {
        num: 4,
        titre: "Failles striées et reconstitution des paléocontraintes",
        themes:
          "Failles striées, dièdres droits, inversion du tenseur des contraintes, régimes tectoniques.",
        quiz: tp4,
      },
    ],
    exercices: [],
  },
];

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug);
}
