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

## Deploy

Live at https://www.tahaimran.com/ on **Vercel**, built from the GitHub repo `tahaimran/tahawebsite`.
Every push to `main` redeploys. `tahaimran.com` redirects to `www.tahaimran.com`, so `site` in `astro.config.mjs`
and `url` in `src/data/site.ts` use the `www` address (canonical links and the sitemap must match the served host).

`/app-ads.txt` is served but not linked from any page. After the apps are live on Play with this site as the
developer website, open AdMob → Apps → app-ads.txt and press "Check for updates".
