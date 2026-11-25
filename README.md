# Pictrail

**Your photos, sorted into the moments they belong to.**

Pictrail is a Windows app that reads the date and place saved inside every photo and files each trip, outing and
occasion into its own neatly named folder. Private, offline, with undo.

- 🌐 Website: **https://pictrail.app**
- ⬇️ Free 14-day trial: **[Download Pictrail-Setup.exe](https://github.com/CodeWithMilap/pictrail/releases/latest/download/Pictrail-Setup.exe)** (Windows 10 & 11, 64-bit)
- 🛒 Buy a license: **https://milapdave1.gumroad.com/l/pictrail**
- ✉️ Support: support@pictrail.app

---

## About this repository

This repository holds the **pictrail.app website** (Next.js, exported as a static site) and the
**installer downloads** (see [Releases](https://github.com/CodeWithMilap/pictrail/releases)).
The Pictrail app itself is closed source.

### Work on the website

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

Settings (links, price) are in `lib/site.js`. The License agreement page is built from `legal/EULA.txt`.

### Hosting (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `out`

© 2026 Pictrail. All rights reserved.
