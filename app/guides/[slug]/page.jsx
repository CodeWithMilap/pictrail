import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import GuideCta from '../../../components/GuideCta';
import JsonLd from '../../../components/JsonLd';
import { GUIDES, getGuide } from '../../../content/guides';
import { SITE, LD_ID, pageOpenGraph } from '../../../lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.meta.slug }));
}

export async function generateMetadata({ params }) {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  const { title, description, slug } = guide.meta;
  const path = `/guides/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...pageOpenGraph({ title, description, path }), type: 'article' },
  };
}

const formatDate = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default async function GuidePage({ params }) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const { meta, Body } = guide;
  const url = `${SITE.url}/guides/${meta.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: meta.title,
        description: meta.description,
        url,
        mainEntityOfPage: url,
        datePublished: meta.published,
        dateModified: meta.updated,
        image: `${SITE.url}/assets/og-image.png`,
        inLanguage: 'en',
        author: { '@type': 'Organization', '@id': LD_ID.publisher, name: SITE.name, url: SITE.url },
        publisher: { '@type': 'Organization', '@id': LD_ID.publisher, name: SITE.name, url: SITE.url, logo: `${SITE.url}/assets/logo.svg` },
        isPartOf: { '@id': LD_ID.website },
        about: { '@id': LD_ID.app },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Pictrail', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE.url}/guides` },
          { '@type': 'ListItem', position: 3, name: meta.title, item: url },
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
              <li><a href="/guides">Guides</a></li>
              <li aria-current="page">{meta.compare ? 'Comparison' : 'Guide'}</li>
            </ol>
          </nav>
          <h1>{meta.title}</h1>
          <p className="updated">
            Updated <time dateTime={meta.updated}>{formatDate(meta.updated)}</time>
          </p>
          <Body />
          <GuideCta />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
