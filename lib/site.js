// Website settings - change links and price here.
export const SITE = {
  url: 'https://pictrail.app',
  name: 'Pictrail',
  tagline: 'Your photos, sorted into the moments they belong to.',
  seller: 'Milap Dave',
  supportEmail: 'support@pictrail.app',
  price: '$19',
  priceNumber: '19',
  version: '1.0.0',

  // Free trial download: the latest GitHub Release always serves the newest installer at this address.
  trialUrl: 'https://github.com/CodeWithMilap/pictrail/releases/latest/download/Pictrail-Setup.exe',
  // Paid product (license key)
  buyUrl: 'https://milapdave1.gumroad.com/l/pictrail',
  // Microsoft Store link - leave null until the Store listing is live (the Store button is hidden while null)
  storeUrl: null,
  // Sale label shown in the hero and pricing section. Set to null to hide it when the sale ends.
  sale: 'Launch sale: 30% off',
  // Demo video shown on the home page. Put the MP4 in public/ (e.g. public/demo.mp4) and set '/demo.mp4'. Hidden while null.
  demoVideo: '/demo.mp4',
};

// Stable IDs that tie the structured data on every page together.
export const LD_ID = {
  website: `${SITE.url}/#website`,
  publisher: `${SITE.url}/#publisher`,
  app: `${SITE.url}/#app`,
};

// Social preview image, shared by every page's Open Graph tags.
export const OG_IMAGE = { url: '/assets/og-image.png', width: 1200, height: 630 };

// Open Graph tags for a sub-page: its own title, description and URL, plus the shared site name and image.
// (Next.js replaces the parent's openGraph object completely, so these must be repeated per page.)
export function pageOpenGraph({ title, description, path }) {
  return { type: 'website', url: path, siteName: SITE.name, title, description, images: [OG_IMAGE] };
}
