import fs from 'node:fs';
import path from 'node:path';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { SITE, pageOpenGraph } from '../../lib/site';

const title = 'License agreement';
const description = 'Pictrail end user license agreement.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/terms' },
  openGraph: pageOpenGraph({ title: `${title} — ${SITE.name}`, description, path: '/terms' }),
};

// Read at build time from the same file the Windows installer shows, so they never differ.
function readEula() {
  // site/legal/EULA.txt is a copy kept in sync by `npm run notices` (so the site also builds on its own, e.g. on Cloudflare).
  const candidates = [path.join(process.cwd(), '..', 'legal', 'EULA.txt'), path.join(process.cwd(), 'legal', 'EULA.txt')];
  for (const file of candidates) if (fs.existsSync(file)) return fs.readFileSync(file, 'utf8').trim();
  throw new Error('legal/EULA.txt not found - build the site from the project folder');
}

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <article className="doc">
          <h1>License agreement</h1>
          <p className="updated">
            This is the same agreement shown when you install Pictrail. Open-source components are listed in
            THIRD-PARTY-NOTICES.txt in the installation folder (or in the app: About → Open-source credits).
          </p>
          <pre>{readEula()}</pre>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
