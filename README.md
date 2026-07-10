# Brandtribal web CDN

Public static host for Brandtribal assessment **JS/CSS** (GitHub Pages).

**Do not** put secrets here. Icons/images stay in Webflow Assets.

## URLs

Base: `https://utahriker.github.io/brandtribal-web-cdn`

- `assessment-home/bt-assessment-home.{css,js,...}`
- `assessment-resources/bt-assessment-resources.{css,js,...}`

Cache-bust from Webflow custom code with `?v=YYYYMMDD.N`.

## Sync from brandtribal-os

```bash
python3 scripts/sync-cdn.py --publish
```

Later: point a subdomain (e.g. `assets.brandtribal.com.au`) at this Pages site.
