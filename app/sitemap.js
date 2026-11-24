import { SITE } from '../lib/site';

// Built once at export time into out/sitemap.xml. Lists only the public, indexable pages.
export const dynamic = 'force-static';

export default function sitemap() {
  return ['', '/privacy', '/terms'].map((path) => ({ url: `${SITE.url}${path}` }));
}
