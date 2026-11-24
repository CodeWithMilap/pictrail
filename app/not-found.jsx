import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <article className="doc" style={{ textAlign: 'center' }}>
          <span className="kicker">Off the trail</span>
          <h1>This page wandered off.</h1>
          <p className="updated">The page you were looking for doesn&apos;t exist.</p>
          <a className="btn btn-primary" href="/">Back to Pictrail</a>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
