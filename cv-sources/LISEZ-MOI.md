# Sources LaTeX des CV web

Variantes **epurees** du CV, destinees au telechargement public. Par rapport
aux sources completes (conservees hors du depot), elles retirent :

- la date de naissance ;
- le numero de telephone personnel ;
- les courriels et telephones des trois referents — donnees personnelles de
  tiers, remplacees par la mention « coordonnees disponibles sur demande ».

Sont conserves : nationalite, ville, courriel, ResearchGate, Google Scholar,
ORCID et le site, qui figurent deja publiquement sur nkodiahardy.com.

## Regenerer les PDF

```bash
cd cv-sources
pdflatex -interaction=nonstopmode CV_Nkodia_Hardy_FR_web.tex
pdflatex -interaction=nonstopmode CV_Nkodia_Hardy_FR_web.tex   # 2e passe : lastpage + hyperref
```

Puis copier le PDF obtenu dans `public/cv/`.

**Ne jamais committer la version complete** : le depot GitHub est public.
