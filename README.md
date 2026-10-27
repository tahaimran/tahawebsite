# tahaimran.com

Taha Imran's personal site: the five Android apps, their privacy policies, support and `app-ads.txt`.
Static site built with [Astro](https://astro.build) 5. No cookies, no analytics, fonts self-hosted.

## Pages

| URL | What | Source |
|---|---|---|
| `/` | Home: the five apps, how they're made, about | `src/pages/index.astro` |
| `/apps/<slug>/` | One page per app: screenshots, features, privacy summary, help | `src/pages/apps/[slug]/index.astro` |
| `/apps/<slug>/privacy/` | The app's privacy policy (**paste this URL into Play Console**) | `src/content/privacy/<slug>.md` |
| `/privacy/` | All policies + this website's own privacy note | `src/pages/privacy.astro` |
| `/support/` | Support email, common answers | `src/pages/support.astro` |
| `/app-ads.txt` | AdMob seller line (one for all 5 apps) | `public/app-ads.txt` |
| `/sitemap-index.xml`, `/robots.txt` | For search engines | generated / `public/` |

Slugs: `habits`, `sipling`, `word-search`, `quizora`, `contraction-timer`.

## Edit content

- App names, store text, features, FAQ, colours, Play links: `src/data/apps.ts`.
  When an app goes live, set its `playUrl` and the page swaps "Coming soon" for a Google Play button.
- Name, support email, policy effective date: `src/data/site.ts`.
- Policies: `src/content/privacy/*.md`. Bump `policyDate` in `site.ts` when you change one.
- App art (icon, feature graphic, 8 screenshots) is copied from the app repo's `apps/<app>/store/`;
  re-copy into `src/assets/apps/<slug>/` after new store art. Astro converts them to small WebP files at build time.

## Run and build

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then writes the static site to dist/
npm run preview   # serves dist/
```

## Deploy (Cloudflare Pages, free)

1. Push this folder to a GitHub repo (for example `tahaimran/tahaimran-website`).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
   Framework preset **Astro**, build command `npm run build`, output folder `dist`.
3. Custom domains → add `tahaimran.com` (and `www.tahaimran.com`). If the domain's DNS is on Cloudflare
   this is one click; otherwise point the domain's nameservers to Cloudflare first.
4. Email Routing (same Cloudflare account) → create `support@tahaimran.com` and forward it to your inbox.
5. Check `https://tahaimran.com/app-ads.txt` loads as plain text, then in AdMob → Apps → app-ads.txt
   press "Check for updates" once the apps are live on Play with this website set as the developer website.

GitHub Pages or Netlify work too: any host that serves the `dist/` folder.
