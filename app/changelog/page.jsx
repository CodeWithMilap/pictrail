import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { SITE, pageOpenGraph } from '../../lib/site';

const title = 'Changelog';
const description = 'What is new in each version of Pictrail, the photo organizer for Windows.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/changelog' },
  openGraph: pageOpenGraph({ title: `${title} — ${SITE.name}`, description, path: '/changelog' }),
};

// Newest first. Add a new entry at the top for every release.
const RELEASES = [
  {
    version: '1.0.0',
    date: '2026-11-24',
    dateText: '24 November 2026',
    notes: [
      'First release of Pictrail for Windows 10 and 11.',
      'Sorts photos into one folder per trip, outing and occasion, named by date and place.',
      'Adjustable grouping: choose the time gap and distance that start a new event. Multi-day trips in one place stay together.',
      'Review before anything moves: rename, merge or skip events, and name events without a location.',
      'Move or copy, into the same folder or a new one.',
      'Crash-safe undo, even days later, from the Recent runs list.',
      'Never deletes or overwrites a photo.',
      'Reads JPEG, PNG, HEIC/HEIF, WebP, TIFF and DNG.',
      'Offline place names built in; optional “Detailed place names” from OpenStreetMap.',
      '14-day free trial, then a one-time license for up to 3 computers.',
      'Automatic updates.',
    ],
  },
];

export default function Changelog() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <article className="doc">
          <h1>Changelog</h1>
          <p className="updated">{description}</p>
          {RELEASES.map((r) => (
            <section key={r.version} className="release" style={{ padding: 0 }}>
              <h2>Version {r.version} <time dateTime={r.date}>{r.dateText}</time></h2>
              <ul>{r.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            </section>
          ))}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
