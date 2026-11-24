import './globals.css';
import SvgDefs from '../components/SvgDefs';
import Effects from '../components/Effects';
import { SITE, OG_IMAGE } from '../lib/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Pictrail — Photo organizer for Windows', template: '%s — Pictrail' },
  description:
    'Pictrail sorts your photos into folders for every trip, outing and occasion, using the date and place saved in each photo. Private, offline, with undo. Try it free for 14 days.',
  icons: {
    icon: [{ url: '/assets/favicon-32.png', sizes: '32x32' }, { url: '/assets/logo.svg', type: 'image/svg+xml' }],
    apple: '/assets/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: 'Pictrail',
    title: 'Pictrail — Your photos, sorted into the moments they belong to',
    description: 'Windows app that files every trip, outing and occasion into its own folder, using the date and place inside your photos.',
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f1e7' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1220' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets CSS know JavaScript is on, before the first paint (used for the scroll reveal). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preload" href="/assets/fonts/fraunces-soft.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/instrument-sans.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <SvgDefs />
        {children}
        <Effects />
      </body>
    </html>
  );
}
