# Deploy VeRaFIED Studios to Netlify

Account: **VeRaFIEDpr@gmail.com**

The site is built to **render fully even before a database is connected**, so the
page comes up immediately. Dynamic features (Vera AI chat history, newsletter,
contact form, product CMS, Stripe checkout) switch on once you add the matching
environment variables.

---

## 1. Put the code on GitHub

Netlify deploys from a Git repo. Push this project to a GitHub repository first
(e.g. `verafied-studios`).

## 2. Create the Netlify site

1. Log in to Netlify as **VeRaFIEDpr@gmail.com**.
2. **Add new site → Import an existing project → GitHub** and pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
4. Click **Deploy**. The marketing page will be live in ~2 minutes — even with
   no database yet.

## 3. Add environment variables (Site settings → Environment variables)

| Variable            | Needed for            | Where to get it                                   |
| ------------------- | --------------------- | ------------------------------------------------- |
| `DATABASE_URL`      | Chat history, forms   | Free Postgres at https://neon.tech (see step 4)   |
| `STRIPE_SECRET_KEY` | Merch checkout        | https://dashboard.stripe.com/apikeys (Tiffaney's) |
| `VERA_API_KEY`      | (optional) live LLM   | Any OpenAI-compatible provider                     |
| `VERA_API_BASE_URL` | (optional) live LLM   | e.g. `https://api.openai.com/v1`                  |
| `VERA_MODEL`        | (optional) live LLM   | e.g. `gpt-4o-mini`                                 |

> Vera AI works **without** any API key — it runs on the built-in VeRaFIED
> knowledge engine. The optional keys only upgrade it to a live LLM.

After adding variables, **Deploys → Trigger deploy → Clear cache and deploy**.

## 4. Free Postgres database (Neon)

Netlify does not host databases, so use Neon (free tier):

1. Create an account at https://neon.tech.
2. Create a project → copy the **connection string** (starts with
   `postgresql://...`). Use the **pooled** connection string.
3. Paste it into Netlify as `DATABASE_URL`.
4. Create the tables. From your machine with the repo:
   ```bash
   DATABASE_URL="postgresql://...your neon url..." npx drizzle-kit push --config drizzle.config.json
   DATABASE_URL="postgresql://...your neon url..." npx tsx scripts/seed.ts
   ```
5. Trigger a redeploy. The contact form, newsletter, Vera history and the
   product grid now read/write live data.

## 5. Stripe (merch checkout) — Tiffaneylatorre@gmail.com

1. Log in to Stripe with the account that should receive payouts.
2. Developers → API keys → copy the **Secret key**.
3. Add it to Netlify as `STRIPE_SECRET_KEY` and redeploy.
4. The **Buy** buttons now open a secure hosted Stripe Checkout. Until then they
   gracefully say "reserve for the next drop."

---

## Troubleshooting

- **"Page won't come up"** → This is usually a missing/throwing `DATABASE_URL`.
  This project no longer throws on a missing database, so a fresh deploy should
  always render. If a deploy fails, open **Deploys → the failed deploy → logs**.
- **Build fails on Node version** → confirm `NODE_VERSION = 22` (set in
  `netlify.toml` and `.nvmrc`).
- **Chat/forms don't persist** → `DATABASE_URL` isn't set or the tables weren't
  pushed. Re-run step 4.
- **Checkout says "reserve"** → `STRIPE_SECRET_KEY` isn't set yet.
