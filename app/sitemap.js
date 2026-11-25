import { SITE } from '../lib/site';
import { GUIDES } from '../content/guides';

// Built once at export time into out/sitemap.xml. Lists only the public, indexable pages.
export const dynamic = 'force-static';

export default function sitemap() {
  const pages = ['', '/guides', '/changelog', '/privacy', '/terms'].map((path) => ({ url: `${SITE.url}${path}` }));
  // Guides carry a real "updated" date, so they get a lastModified.
  const guides = GUIDES.map(({ meta }) => ({ url: `${SITE.url}/guides/${meta.slug}`, lastModified: meta.updated }));
  return [...pages, ...guides];
}
