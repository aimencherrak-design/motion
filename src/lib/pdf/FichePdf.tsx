import { Document, Image, Page, Path, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";

// Document imprimable : fond blanc, bandeau noir, accent doré (charte de l'outil).
const NOIR = "#0a0a0b";
const ANTHRACITE = "#2a2a2f";
const OR = "#c99a22";
const OR_CLAIR = "#e9b43a";
const GRIS = "#6f6f77";
const LIGNE = "#e4e4e7";
const VERT = "#1f8a55";
const ORANGE = "#c4720f";
const ROUGE = "#c83a32";

const s = StyleSheet.create({
  page: { paddingTop: 96, paddingBottom: 54, fontFamily: "Helvetica", fontSize: 9.5, color: ANTHRACITE },
  entete: { position: "absolute", top: 0, left: 0, right: 0 },
  bandeau: { backgroundColor: NOIR, paddingHorizontal: 36, paddingVertical: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  marque: { flexDirection: "row", alignItems: "center" },
  marqueTexte: { marginLeft: 10 },
  marqueNom: { color: "#ffffff", fontSize: 13, fontFamily: "Helvetica-Bold" },
  marqueSous: { color: "#a3a3a9", fontSize: 7.5, letterSpacing: 1.2, marginTop: 2 },
  bandeauDroite: { alignItems: "flex-end" },
  bandeauTitre: { color: OR_CLAIR, fontSize: 8, letterSpacing: 1.5, fontFamily: "Helvetica-Bold" },
  bandeauDate: { color: "#d4d4d8", fontSize: 8.5, marginTop: 3 },
  filet: { height: 3, backgroundColor: OR_CLAIR },
  corps: { paddingHorizontal: 36, paddingTop: 0 },
  destinataire: { fontSize: 8.5, color: GRIS, marginBottom: 10 },
  titre: { fontSize: 20, fontFamily: "Helvetica-Bold", color: NOIR },
  sousTitre: { fontSize: 10, color: GRIS, marginTop: 4 },
  prix: { fontSize: 16, fontFamily: "Helvetica-Bold", color: NOIR },
  ligneHaut: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  photoPrincipale: { marginTop: 16, width: "100%", height: 230, objectFit: "cover", borderRadius: 4 },
  section: { marginTop: 18 },
  sectionTitre: { fontSize: 8, fontFamily: "Helvetica-Bold", letterSpacing: 1.3, color: OR, marginBottom: 7 },
  grille: { flexDirection: "row", flexWrap: "wrap", borderTopWidth: 1, borderLeftWidth: 1, borderColor: LIGNE },
  cellule: { width: "33.33%", paddingVertical: 7, paddingHorizontal: 9, borderRightWidth: 1, borderBottomWidth: 1, borderColor: LIGNE },
  etiquette: { fontSize: 7.5, color: GRIS, marginBottom: 2 },
  valeur: { fontSize: 10, fontFamily: "Helvetica-Bold", color: NOIR },
  ligneCheck: { flexDirection: "row", alignItems: "center", paddingVertical: 7, borderBottomWidth: 1, borderColor: LIGNE },
  checkLibelle: { fontSize: 10 },
  checkDetail: { fontSize: 8.5, color: GRIS, marginTop: 1.5 },
  pastille: { paddingHorizontal: 7, paddingVertical: 2.5, borderRadius: 8, fontSize: 8, fontFamily: "Helvetica-Bold", color: "#ffffff" },
  remarques: { backgroundColor: "#f7f7f5", borderLeftWidth: 3, borderColor: OR_CLAIR, padding: 10, fontSize: 9.5, lineHeight: 1.45 },
  galerie: { flexDirection: "row", flexWrap: "wrap", marginHorizontal: -3 },
  vignette: { width: "33.33%", padding: 3 },
  vignetteImg: { width: "100%", height: 112, objectFit: "cover", borderRadius: 3 },
  pied: { position: "absolute", bottom: 20, left: 36, right: 36, flexDirection: "row", justifyContent: "space-between", fontSize: 7.5, color: GRIS, borderTopWidth: 1, borderColor: LIGNE, paddingTop: 8 },
});

export type DonneesPdf = {
  vehicule: {
    titre: string;
    annee: number | null;
    kilometrage: string | null;
    carburant: string | null;
    prix: string | null;
    localisation: string | null;
    plateforme: string | null;
    url: string | null;
    datePublication: string | null;
    joursEnLigne: number | null;
  };
  controles: { libelle: string; etat: "ok" | "attention" | "non" | "vide"; texte: string; detail?: string | null }[];
  remarques: string | null;
  photos: { data: Buffer; format: "jpg" | "png" }[];
  agence: string | null;
  apporteur: { nom: string; entreprise: string; telephone: string; email: string; siret: string };
  date: string;
};

const COULEUR_ETAT = { ok: VERT, attention: ORANGE, non: ROUGE, vide: "#a1a1aa" };

function Monogramme() {
  return (
    <Svg viewBox="0 0 64 64" width={30} height={30}>
      <Path fill="#ffffff" d="M24 7h16l19 50H46.5l-4.2-11.5H21.7L17.5 57H5zM25.6 36h12.8L32 18.5z" />
      <Path fill={OR_CLAIR} d="M15 39.5h47l-4.6 6.5H10.5z" />
    </Svg>
  );
}

function Cellule({ etiquette, valeur }: { etiquette: string; valeur: string | number | null | undefined }) {
  return (
    <View style={s.cellule}>
      <Text style={s.etiquette}>{etiquette}</Text>
      <Text style={s.valeur}>{valeur ?? "—"}</Text>
    </View>
  );
}

export function FichePdf({ d }: { d: DonneesPdf }) {
  const [principale, ...autres] = d.photos;
  const v = d.vehicule;
  const signature = [d.apporteur.nom, d.apporteur.entreprise].filter(Boolean).join(" · ");
  const contact = [d.apporteur.telephone, d.apporteur.email].filter(Boolean).join(" · ");

  return (
    <Document title={`Pré-qualification – ${v.titre}`} author={d.apporteur.nom || "Apporteur"} language="fr">
      <Page size="A4" style={s.page}>
        <View style={s.entete} fixed>
        <View style={s.bandeau}>
          <View style={s.marque}>
            <Monogramme />
            <View style={s.marqueTexte}>
              <Text style={s.marqueNom}>{d.apporteur.entreprise || d.apporteur.nom || "Apporteur d'affaires"}</Text>
              <Text style={s.marqueSous}>APPORTEUR D&apos;AFFAIRES AUTOMOBILE · MULHOUSE</Text>
            </View>
          </View>
          <View style={s.bandeauDroite}>
            <Text style={s.bandeauTitre}>FICHE DE PRÉ-QUALIFICATION</Text>
            <Text style={s.bandeauDate}>Établie le {d.date}</Text>
          </View>
        </View>
        <View style={s.filet} />
        </View>

        <View style={s.corps}>
          {d.agence && <Text style={s.destinataire}>À l&apos;attention de : {d.agence}</Text>}
          <View style={s.ligneHaut}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={s.titre}>{v.titre}</Text>
              <Text style={s.sousTitre}>{[v.annee, v.kilometrage, v.carburant, v.localisation].filter(Boolean).join("  ·  ")}</Text>
            </View>
            {v.prix && <Text style={s.prix}>{v.prix}</Text>}
          </View>

          {/* eslint-disable-next-line jsx-a11y/alt-text -- composant PDF, pas une image HTML */}
          {principale && <Image style={s.photoPrincipale} src={principale} />}

          <View style={s.section}>
            <Text style={s.sectionTitre}>VÉHICULE</Text>
            <View style={s.grille}>
              <Cellule etiquette="Année" valeur={v.annee} />
              <Cellule etiquette="Kilométrage" valeur={v.kilometrage} />
              <Cellule etiquette="Carburant" valeur={v.carburant} />
              <Cellule etiquette="Prix affiché" valeur={v.prix} />
              <Cellule etiquette="Annonce" valeur={v.plateforme} />
              <Cellule etiquette="En ligne depuis" valeur={v.joursEnLigne != null ? `${v.joursEnLigne} jours` : null} />
            </View>
          </View>

          <View style={s.section} wrap={false}>
            <Text style={s.sectionTitre}>POINTS DE CONTRÔLE</Text>
            {d.controles.map((c) => (
              <View key={c.libelle} style={s.ligneCheck}>
                <View style={{ flex: 1 }}>
                  <Text style={s.checkLibelle}>{c.libelle}</Text>
                  {c.detail ? <Text style={s.checkDetail}>{c.detail}</Text> : null}
                </View>
                <Text style={[s.pastille, { backgroundColor: COULEUR_ETAT[c.etat] }]}>{c.texte}</Text>
              </View>
            ))}
          </View>

          {d.remarques && (
            <View style={s.section} wrap={false}>
              <Text style={s.sectionTitre}>REMARQUES</Text>
              <Text style={s.remarques}>{d.remarques}</Text>
            </View>
          )}

          {autres.length > 0 && (
            <View style={s.section}>
              <Text style={s.sectionTitre} minPresenceAhead={130}>
                PHOTOS
              </Text>
              <View style={s.galerie}>
                {autres.map((p, i) => (
                  <View key={i} style={s.vignette} wrap={false}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text -- composant PDF, pas une image HTML */}
                    <Image style={s.vignetteImg} src={p} />
                  </View>
                ))}
              </View>
            </View>
          )}

          {v.url && (
            <Text style={{ marginTop: 16, fontSize: 7.5, color: GRIS }}>Annonce d&apos;origine : {v.url}</Text>
          )}
        </View>

        <View style={s.pied} fixed>
          <Text>{[signature, contact, d.apporteur.siret ? `SIRET ${d.apporteur.siret}` : ""].filter(Boolean).join("  ·  ")}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
