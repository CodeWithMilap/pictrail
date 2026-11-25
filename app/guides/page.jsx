import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import JsonLd from '../../components/JsonLd';
import { GUIDES } from '../../content/guides';
import { SITE, LD_ID, pageOpenGraph } from '../../lib/site';

const title = 'Guides';
const description = 'Simple, step-by-step guides to organizing your photos on Windows: by date, by place, from WhatsApp, phone backups and SD cards.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/guides' },
  openGraph: pageOpenGraph({ title: `${title} — ${SITE.name}`, description, path: '/guides' }),
};

const howTo = GUIDES.filter((g) => !g.meta.compare);
const compare = GUIDES.filter((g) => g.meta.compare);

function List({ items }) {
  return (
    <ul className="guide-list">
      {items.map(({ meta }) => (
        <li key={meta.slug}>
          <a href={`/guides/${meta.slug}`}>
            <strong>{meta.title}</strong>
            <span>{meta.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Guides() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE.url}/guides#page`,
        url: `${SITE.url}/guides`,
        name: `${title} — ${SITE.name}`,
        description,
        isPartOf: { '@id': LD_ID.website },
        hasPart: GUIDES.map(({ meta }) => ({ '@id': `${SITE.url}/guides/${meta.slug}#article` })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Pictrail', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE.url}/guides` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main className="wrap">
        <article className="doc">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Pictrail</a></li>
              <li aria-current="page">Guides</li>
            </ol>
          </nav>
          <h1>Guides</h1>
          <p className="updated">{description}</p>
          <h2>How to</h2>
          <List items={howTo} />
          <h2>Comparisons</h2>
          <List items={compare} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
