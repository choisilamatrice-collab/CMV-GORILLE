# CMV Gorille – mise en ligne

## 1. Mettre les fichiers sur GitHub
1. Décompresse le zip sur ton ordinateur (clic droit → « Extraire tout »).
2. Ouvre le dossier `cmv-gorille` obtenu.
3. Sur GitHub, dans ton dépôt `cmv-gorille` : **Ajouter un fichier → Téléverser des fichiers**.
4. Sélectionne **tout le contenu** du dossier (Ctrl+A) et glisse-le dans la page.
   ⚠️ Glisse le contenu, pas le dossier lui-même ni le zip.
5. Clique sur **Valider les modifications** (Commit changes).

## 2. Mettre en ligne sur Netlify
1. Netlify → **Add new project → Import an existing project → GitHub** → choisis `cmv-gorille`.
2. Ne change rien aux réglages de build (ils sont dans `netlify.toml`).
3. Avant de déployer, ajoute 2 variables d'environnement :
   - `VITE_SUPABASE_URL` = l'URL de ton projet Supabase (finit par `supabase.co`)
   - `VITE_SUPABASE_ANON_KEY` = la clé `sb_publishable_…`
4. **Deploy**.

## 3. Relier Supabase à ton adresse Netlify
Supabase → **Authentication → URL Configuration** :
- **Site URL** = ton adresse Netlify (ex. `https://cmv-gorille.netlify.app`)
- Ajoute la même adresse dans **Redirect URLs**.

## 4. Tester
Ouvre ton adresse Netlify sur ton téléphone → crée un compte → confirme l'e-mail reçu →
connecte-toi → adopte ton Gory → l'accueil s'affiche.
