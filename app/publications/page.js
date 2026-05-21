"use client";

import Hero from "@/components/Hero";
import { useLang } from "@/contexts/LanguageContext";
import { tr } from "@/data/translations";

const publications = [
  {
    annee: 2026,
    items: [
      {
        type: "Article",
        ref: "Bazebizonza Tchiguina, N. C., Samba, P. R. R., Nkodia, H. M. D.-V., Boudzoumou, F., Arfaoui, I., François, C., & Lahogue, P. (2026). Inventory of karstic cavities of the Schisto-Calcaire Group, Republic of Congo: Applying a geoheritage promotion approach in the Madingou region. International Journal of Geoheritage and Parks, 14(1), 43–59.",
        doi: "10.1016/j.ijgeop.2026.02.002",
      },
      {
        type: "Article",
        ref: "Ngala Ntambwe, N., Bazebizonza, N. C., Lahogue, P., [et al.], & Kanda Nkula, V. (2026). Karstogenèse de la grotte Ndundu 1 dans la région de Mbanza-Ngungu au Kongo Central. Journal Africain des Sciences, 3(3), art. 14.",
        doi: "10.70237/jafrisci.2026.v3.i3.14",
      },
    ],
  },
  {
    annee: 2025,
    items: [
      {
        type: "Article",
        ref: "Colet, M., Kolawole, F., Ajala, R., Delvaux, D., & Nkodia, H. M. D.-V. (2025). Active crustal deformation across a nucleating extensional microplate, D. R. Congo, East Africa. Tectonics, 44(7), e2025TC008815.",
        doi: "10.1029/2025TC008815",
      },
      {
        type: "Article",
        ref: "Mavoungou, Y. B., Watha-Ndoudy, N., Nkodia, H. M. D.-V., Bolarinwa, A. T., Umaru, A. O., & Kasay, G. M. (2025). Geochemistry of the metavolcanic rocks from the Archean Bikélélé greenstone belt (Chaillu Massif, Republic of the Congo): Petrogenesis and tectonic implications. Geosystems and Geoenvironment, 4(4), 100429.",
        doi: "10.1016/j.geogeo.2025.100429",
      },
      {
        type: "Article",
        ref: "Mavoungou, Y. B., Watha-Ndoudy, N., Bolarinwa, A. T., Nkodia, H. M. D.-V., Umaru, A. O., & Kasay, G. M. (2025). Petrology and geochemistry of the metamorphic rocks from the Bikélélé area, the Chaillu Massif, southwestern Republic of the Congo. Arabian Journal of Geosciences, 18(7), 144.",
        doi: "10.1007/s12517-025-12287-1",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Park, K., & Kim, Y.-S. (2025). Seismogenic zoning of the Korean Peninsula: A preliminary study using focal mechanism data. 2025 Joint Fall Meeting of Korean Geological Societies / 80th General Assembly of the Geological Society of Korea, p. 298.",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Kolawole, F., Boudzoumou, F., & Delvaux, D. (2025). Active Tectonics in Western Central Africa: Current Advancements and Implications. Annual Conference of the Geological Society of Korea, p. 590.",
      },
      {
        type: "Communication",
        ref: "Samba, P. R. R., Bazebizonza, N. C., Nkodia, H. M. D.-V., Boudzoumou, F., Arfaoui, I., & Lahogue, P. (2025). Chemical signature and structural study of a Madingou hydrokarst system, southwest of the Republic of Congo. EGU General Assembly 2025, Vienne, EGU25-716.",
        doi: "10.5194/egusphere-egu25-716",
      },
    ],
  },
  {
    annee: 2024,
    items: [
      {
        type: "Article",
        ref: "Nkodia, H. M. D.-V., Boudzoumou, F., Miyouna, T., Kongota, E., Ganza, G. B., Lahogue, P., & Delvaux, D. (2024). Brittle faulting and tectonic stress history on the western margin of the Congo Basin between Kinshasa and Brazzaville: Implications for the evolution of the Malebo Pool and the Congo River. Tectonophysics, 877, 230282.",
        doi: "10.1016/j.tecto.2024.230282",
      },
      {
        type: "Article",
        ref: "Miyouna, T., Boudzoumou, F., Nkodia, H. M. D.-V., & Delvaux, D. (2024). The Cambro-Ordovician Gondwana alluvial megafan in Central Africa: Insights from the Paleozoic sandstones of the Inkisi group, Congo Republic and Democratic Republic of the Congo. Journal of African Earth Sciences, 209, 105109.",
        doi: "10.1016/j.jafrearsci.2023.105109",
      },
      {
        type: "Article",
        ref: "Mavoungou, Y. B., Nkodia, H. M. D.-V., Watha-Ndoudy, N., & Bolarinwa, A. T. (2024). Lineament extraction and paleostress analysis in the Bikélélé iron deposit (the Chaillu Massif, Republic of Congo): Integration of ALOS-PALSAR DEM and field investigation data. Modeling Earth Systems and Environment, 10(2), 1993–2009.",
        doi: "10.1007/s40808-023-01883-3",
      },
      {
        type: "Article",
        ref: "Bouénitela, V. T. T., Matiaba-Bazika, U. V., Makamba, N. L., Nkodia, H. M. D.-V., Kebi-Tsoumou, S. P. C., & Boudzoumou, F. (2024). An Overview of the Present State of Knowledge in the Tectonostratigraphic Evolution of the West Congo Belt in Republic of Congo. International Journal of Geosciences, 15(12), 1038–1063.",
        doiAConfirmer: "10.4236/ijg.2024.1512xxx",
        noteUrl: "https://www.scirp.org/journal/paperinformation?paperid=138427",
      },
      {
        type: "Article",
        ref: "Loketo Thijenira, A., Ngala Ntambwe, N., Mayena Kanika, T., Kimbembi Ma Ibaka, A., Nkodia, H. M. D.-V., [et al.], & Lahogue, P. (2024). État des lieux et spécificités géologiques des cavités karstiques des formations du Sous-Groupe Schisto-Calcaire des régions de Mbanza-Ngungu, Kimpese et Songololo (Kongo-Central, RDC). Journal Africain des Sciences.",
      },
      {
        type: "Thèse",
        ref: "Nkodia, H. M. D.-V. (2024). Évolution tectono-structurale et déformation cassante dans la Chaîne Ouest Congolienne et son Avant-pays (République du Congo et République Démocratique du Congo). Thèse de doctorat, Université Marien Ngouabi, Brazzaville.",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Kolawole, F., Boudzoumou, F., & Delvaux, D. (2024). The western central African passive margin seismicity. 37th International Geological Congress (IGC), Busan, Corée du Sud.",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Boudzoumou, F., Miyouna, T., Lahogue, P., & Delvaux, D. (2024). Évolution tectono-structurale et déformation cassante comparée dans le Supergroupe Ouest Congolien et le Groupe de l'Inkisi. Geologica Belgica Conference Proceedings, 5, 116–117.",
      },
      {
        type: "Communication",
        ref: "Bazebizonza, N. C., Samba, P., Nkodia, H., Boudzoumou, F., Arfaoui, I., & Lahogue, P. (2024). Influence de la lithostratigraphie et des structures tectoniques sur le développement des grottes. Geologica Belgica Conference Proceedings, 5, 8–9.",
      },
      {
        type: "Communication",
        ref: "Miyouna, T., Boudzoumou, F., Nkodia, H. M. D.-V., & Delvaux, D. (2024). Grès de l'Inkisi : dépôt d'un super cône alluvial ordovicien d'Afrique centrale. Geologica Belgica Conference Proceedings, 5, 88–89.",
      },
      {
        type: "Communication",
        ref: "Samba, P., Bazebizonza, N., Nkodia, H., Boudzoumou, F., Arfaoui, I., & Lahogue, P. (2024). Mise en évidence d'un système hydrokarstique dans le secteur de Madingou en République du Congo. Geologica Belgica Conference Proceedings, 5, 133–134.",
      },
      {
        type: "Communication",
        ref: "Thijenira, L. A., Lahogue, P., Ngala, N. N., Kanika, M. T., Kimbembi, M. A. I., Nkodia, H., & Delvaux, D. (2024). État des lieux des cavités karstiques du Schisto-Calcaire (Kongo-Central, RDC). Geologica Belgica Conference Proceedings, 5, 138–139.",
      },
      {
        type: "Communication",
        ref: "Lahogue, P., Ngala, N., Arfaoui, I., Thijenira, A., Nkodia, H., Bazebizonza, N., [et al.] (2024). Ngovo, Kongo-Central, RDC, une grotte de grand intérêt scientifique et touristique. Geologica Belgica Conference Proceedings, 5, 58–59.",
      },
      {
        type: "Communication",
        ref: "Ngala, N., Bazebizonza, N., Arfaoui, I., Lahogue, P., Nkodia, H., Lutete, J., Kanda, V., & Kakule, R. (2024). Études lithologiques et structurales comparatives des grottes de Nkiesa et Ndundu (RDC). Geologica Belgica Conference Proceedings, 5, 111–112.",
      },
    ],
  },
  {
    annee: 2023,
    items: [
      {
        type: "Article",
        ref: "Loemba, A. P. R., Ferreira, A., Ntsiele, L. J. E. P., Opo, U. F., Bazebizonza Tchiguina, N. C., Nkodia, H. M. D.-V., Klausen, M., & Boudzoumou, F. (2023). Archean crustal generation and Neoproterozoic partial melting in the Ivindo basement, NW Congo craton, Republic of Congo: Petrology, geochemistry and zircon U–Pb geochronology constraints. Journal of African Earth Sciences, 200, 104852.",
        doi: "10.1016/j.jafrearsci.2023.104852",
      },
      {
        type: "Livre",
        ref: "Nkodia Hardy Medry Dieu-Veil. (2023). Maîtriser l'Art de la Revue Bibliographique : Guide Pratique. Éditions indépendantes.",
        noteUrl: "https://www.amazon.fr/Maitriser-lArt-Revue-Bibliographique-Pratique/dp/B0CFZGXNPD",
      },
    ],
  },
  {
    annee: 2022,
    items: [
      {
        type: "Article",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Kolawole, F., Boudzoumou, F., Loemba, A. P. R., Bazebizonza Tchiguina, N. C., & Delvaux, D. (2022). Seismogenic Fault Reactivation in Western Central Africa: Insights From Regional Stress Analysis. Geochemistry, Geophysics, Geosystems, 23(11), e2022GC010377.",
        doi: "10.1029/2022GC010377",
      },
      {
        type: "Article",
        ref: "Loemba, A. P. R., Nkodia, H. M. D.-V., Opo, U. F., Bazebizonza Tchiguina, N. C., Miyouna, T., & Boudzoumou, F. (2022). A Unified Structural Framework for Major Shear Zone in the Ntem-Chaillu-Ivindo Blocks: Case of Tectonic and Structural Evolution of the Ivindo Basement, Northern Republic of Congo, Congo Craton. International Journal of Science and Research (IJSR), 11(11). ISSN : 2319-7064.",
        doiAConfirmer: "IJSR",
        noteUrl: "https://www.ijsr.net",
      },
      {
        type: "Jeu de données",
        ref: "Nkodia, H. M. D.-V. (2022). Data for Seismogenic Fault Reactivation in Western Central Africa: Insights from Regional Stress Analysis. Harvard Dataverse.",
      },
      {
        type: "Communication",
        ref: "Delvaux, D., Miyouna, T., Boudzoumou, F., & Nkodia, H. (2022). Using combined paleostress reconstruction and slip tendency for reconstructing the brittle structural history of a complex strike-slip fault system. EGU General Assembly 2022, Vienne, EGU22-7401.",
        doi: "10.5194/egusphere-egu22-7401",
      },
      {
        type: "Communication",
        ref: "Loemba, A. P. R., Ntsiele, P. L. J. E., Opo, U. F., Bazebizonza, N. C., Nkodia, H. M. D.-V., & Boudzoumou, F. (2022). Crustal growth of Archean and early Proterozoic granitoids of the Ivindo region (NW Republic of Congo). EGU General Assembly 2022, Vienne, EGU22-5438.",
        doi: "10.5194/egusphere-egu22-5438",
      },
      {
        type: "Communication",
        ref: "Arfaoui, I., Bazebizonza, N. C., Thijenira, A., Ngala, N., Lutete, J., Samba, P., Nkodia, H. M. D.-V., Boudzoumou, F., Delvaux, D., & Lahogue, P. (2022). New inventoried Karst systems in Central Africa and preliminary paleoclimate proxy analysis applied to speleothems. Climate Change: The Karst Record (KR9), juillet 2022.",
      },
      {
        type: "Communication",
        ref: "Loemba, A. P. R., Nkodia, H. M. D.-V., Bazebizonza, N. C., Miyouna, T., & Boudzoumou, F. (2022). Tectonic and structural evolution of major shear zone in the Ntem-Chaillu Block, Ivindo region, Republic of Congo. Tectonic Studies Group Annual Meeting (TSG 2022), janvier 2022.",
      },
    ],
  },
  {
    annee: 2021,
    items: [
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Boudzoumou, F., Miyouna, T., Ibarra-Gnianga, A., & Delvaux, D. (2021). A progressive episode of deformation in the foreland of the West-Congo Belt: From folding to brittle shearing, in Republic of Congo. EGU General Assembly 2021, Vienne, EGU21-10949.",
        doi: "10.5194/egusphere-egu21-10949",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Boudzoumou, F., & Delvaux, D. (2021). Integration of flower structures in strike-slip fault damage zones classification — examples from the West-Congo belt and foreland. EGU General Assembly 2021, Vienne, EGU21-2227.",
        doi: "10.5194/egusphere-egu21-2227",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Delvaux, D., Boudzoumou, F., & Miyouna, T. (2021). Paleostress reconstruction of brittle deformation in the foreland part of the West Congo Belt, Republic of Congo and DRC. Geologica Belgica International Meeting / TSG AGM 2021, Tervuren (Belgique), janvier 2021.",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Boudzoumou, F., Kolawole, F., [et al.] (2021). Slip tendency applied to faults systems in the Congo Basin and its surroundings: A clue to explain western central African passive margin seismicity. Geosciences Made in Belgium, 324.",
      },
    ],
  },
  {
    annee: 2020,
    items: [
      {
        type: "Article",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Delvaux, D., & Boudzoumou, F. (2020). Flower structures in sandstones of the Paleozoic Inkisi Group (Brazzaville, Republic of Congo): Evidence for two major strike-slip fault systems and geodynamic implications. South African Journal of Geology, 123(4), 531–550.",
        doi: "10.25131/saig.123.0038",
      },
      {
        type: "Article",
        ref: "Bazebizonza Tchiguina, N. C., Miyouna, T., Nkodia, H. M. D.-V., & Boudzoumou, F. (2020). Detection of Neotectonic Signatures by Morphometric Analysis of Inkisi Group on Both Banks of the Congo River. Journal of Geosciences and Geomatics, 8(2), 83–93.",
        doiAConfirmer: "10.12691/jgg-8-2-x",
        noteUrl: "https://pubs.sciepub.com/jgg/8/2/",
      },
      {
        type: "Article",
        ref: "Miyouna, T., Bazebizonza Tchiguina, N. C., Essouli, O. F., Kempena, A., Nkodia, H. M. D.-V., & Boudzoumou, F. (2020). Cartographie par traitement d'image satellitaire des linéaments du groupe de l'Inkisi en République du Congo : implications hydrogéologique et minière. Afrique Science, 16(4), 68–84.",
      },
      {
        type: "Article",
        ref: "Nkodia, A. J., Bazebizonza Tchiguina, N. C., & Nkodia, H. M. D.-V. (2020). Caractéristiques épidémiologiques et dynamique spatio-temporelle de la pandémie à COVID-19 en République du Congo, 2020. (21), 39–45.",
      },
    ],
  },
  {
    annee: 2019,
    items: [
      {
        type: "Communication",
        ref: "Delvaux, D., Ganza, G., Kongota, E., Nkodia, H., Miyouna, T., & Boudzoumou, F. (2019). The « fault of the Pool » along the Congo River between Kinshasa and Brazzaville, R(D)Congo is no more a myth: Paleostress from small-scale brittle structures. EGU General Assembly 2019, Vienne, avril 2019.",
      },
    ],
  },
  {
    annee: 2018,
    items: [
      {
        type: "Article",
        ref: "Miyouna, T., Nkodia, H. M. D.-V., Essouli, O. F., Dabo, M., Boudzoumou, F., & Delvaux, D. (2018). Strike-slip deformation in the Inkisi Formation, Brazzaville, Republic of Congo. Cogent Geoscience, 4(1), 1542762.",
        doi: "10.1080/23312041.2018.1542762",
      },
      {
        type: "Mémoire",
        ref: "Nkodia, H. M. D.-V. (2017). Style tectonique et structural de la formation de l'Inkisi à Brazzaville, République du Congo. Mémoire de Master, Université Marien Ngouabi, Brazzaville.",
      },
      {
        type: "Communication",
        ref: "Nkodia, H. M. D.-V., Miyouna, T., Boudzoumou, F., Mbilou, U., Kongota, E., & Essouli, O. F. (2018). Style structural et tectonique de la formation de l'Inkisi dans le secteur de Brazzaville, République du Congo. Congo Geology Conference, Kinshasa, octobre 2018.",
      },
    ],
  },
];

const couleurType = {
  Article: "bg-corail text-white",
  Communication: "bg-encre text-white",
  Livre: "bg-amber-600 text-white",
  Thèse: "bg-violet-700 text-white",
  Mémoire: "bg-violet-400 text-white",
  "Jeu de données": "bg-teal-600 text-white",
};

export default function Publications() {
  const { T } = useLang();

  return (
    <>
      <Hero
        titre={T(tr.publications.hero)}
        sousTitre={T(tr.publications.sousTitre)}
      />
      <section className="max-w-content mx-auto px-5 py-16">
        {publications.map((bloc) => (
          <div key={bloc.annee} className="mb-12">
            <h2 className="font-oswald text-5xl text-corail font-bold">{bloc.annee}</h2>
            <span className="block w-full h-px bg-black/10 my-5" />
            <ul className="space-y-5">
              {bloc.items.map((it, i) => (
                <li key={i} className="carte p-6 flex flex-col sm:flex-row gap-4">
                  <span
                    className={`shrink-0 self-start font-oswald uppercase text-xs tracking-wide px-3 py-1 ${
                      couleurType[it.type] || "bg-encre text-white"
                    }`}
                  >
                    {it.type}
                  </span>
                  <div>
                    <p className="text-encre/85 leading-relaxed">{it.ref}</p>
                    {it.doi && (
                      <a
                        href={`https://doi.org/${it.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lien-corail text-sm mt-2 inline-block"
                      >
                        DOI : {it.doi} →
                      </a>
                    )}
                    {it.doiAConfirmer && (
                      <span className="block text-sm mt-2 text-encre/50 italic">
                        {T(tr.publications.doiConfirmer)} {it.doiAConfirmer}
                        {it.noteUrl && (
                          <>
                            {" — "}
                            <a href={it.noteUrl} target="_blank" rel="noopener noreferrer" className="lien-corail">
                              {T(tr.publications.voirSource)}
                            </a>
                          </>
                        )}
                      </span>
                    )}
                    {!it.doi && !it.doiAConfirmer && it.noteUrl && (
                      <a href={it.noteUrl} target="_blank" rel="noopener noreferrer" className="lien-corail text-sm mt-2 inline-block">
                        {T(tr.publications.voirSource)}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-encre/55 font-bitter italic">
          {T(tr.publications.listeComplete)}{" "}
          <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer" className="lien-corail">ResearchGate</a>{" "}
          {T({ fr: "et", en: "and" })}{" "}
          <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="lien-corail">Google Scholar</a>.
        </p>
      </section>
    </>
  );
}
