import { SITE } from '../lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <a className="logo" href="/">
          <img src="/assets/logo.svg" alt="" width="28" height="28" />
          Pictrail
        </a>
        <nav aria-label="Footer">
          <a href="/privacy">Privacy</a>
          <a href="/terms">License agreement</a>
          <a href={`mailto:${SITE.supportEmail}`}>Contact</a>
        </nav>
        <div className="credits">
          © 2026 {SITE.seller}. Pictrail is a product of {SITE.seller}. Place names from GeoNames (CC-BY 4.0) and © OpenStreetMap
          contributors. Fonts: Fraunces and Instrument Sans (SIL Open Font License).
        </div>
      </div>
    </footer>
  );
}
