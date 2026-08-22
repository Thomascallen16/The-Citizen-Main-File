# The Citizen's Record — Website

A static, no-backend website. It can be deployed through any static host, including GitHub Pages, Netlify, Cloudflare Pages, or a conventional web server. No database, build step, or server-side code is required.

## Structure

| Path | Purpose |
|---|---|
| `index.html`, `the-record.html`, `read-the-record.html`, `learn.html`, `toolkit.html`, `about.html`, `contact.html`, `updates.html` | Public site pages. |
| `admin.html` | An unlinked drafting helper that formats a daily-log entry for manual insertion into `data/posts.js`. It does not provide login, storage, or publishing. |
| `css/style.css` | Shared site styling. |
| `js/main.js` | Navigation, active-link highlighting, filters, and daily-log rendering. |
| `data/posts.js` | Daily-log source data. |
| `assets/logo.svg` | Header and footer logo asset. |

## Publishing model

The site has no user-account system and no public posting mechanism. Publishing is performed by updating the source content, reviewing the change, and redeploying the static site.

## Updating the daily log

1. Open `data/posts.js`.
2. Copy an existing entry block and insert the revised entry at the start of the `CR_POSTS` array.
3. Update the date, type, title, summary, and optional links.
4. Review the content and deploy the updated site.

The homepage’s latest-update card and the Daily Log page are both generated from this data file.

## Pre-launch checklist

- Configure the monitored contact route in `contact.html`, or replace the mailto behavior with an approved form service.
- Confirm all footer and header social links point to the intended public profiles.
- Replace illustrative bills, cases, articles, and video placeholders with reviewed, source-linked editorial material.
- Add working media embeds only for published videos.
- Verify every public factual claim against the editorial source record before deployment.
