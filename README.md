# DS EXPORT — Said Dellioua

Site Next.js 15 + Tailwind v4 + Supabase, prêt pour Vercel.

## Déployer sur Vercel
1. Pousser ce dossier sur GitHub (ou glisser-déposer dans vercel.com/new).
2. Framework : Next.js (détecté automatiquement).
3. Variables d'environnement (facultatives, les valeurs publiques Supabase sont déjà dans le code) :
   - `NEXT_PUBLIC_SUPABASE_URL` = https://gxmdnzkchzvotzagxjop.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = clé publishable du projet Supabase
   - `ANTHROPIC_API_KEY` = clé Claude API → active les vraies réponses IA (sinon, guide intégré FR/AR/EN)

## Base Supabase (projet `ds-export`)
Tables : `bookings`, `network_members` (publication après `approved = true`), `readiness_results`, `assistant_messages`.
RLS : le public peut seulement insérer ; seuls les membres approuvés sont lisibles (sans e-mail ni téléphone).
Consulter les demandes : Supabase → Table Editor.

## Local
```
npm install
npm run dev
```
Langue : bouton FR / ع / EN, ou `?lang=ar` dans l'URL.
