import { SITE } from '../lib/site';

// Built into out/robots.txt. Allows all crawlers (same as before this file existed) and points to the sitemap.
// Cloudflare adds its own "content signals" comment block on top of this file.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
