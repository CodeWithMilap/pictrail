
export default function SiteHeader({ home = false }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="logo" href={home ? '#top' : '/'}>
          <img src="/assets/logo.svg" alt="" width="36" height="36" />
          Pictrail
        </a>
        <nav className="nav" aria-label="Main">
          {home && (
            <>
              <a href="#how">How it works</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </>
          )}
          <a className="btn btn-primary btn-small" href={home ? '#download' : '/#download'}>Try it free</a>
        </nav>
      </div>
    </header>
  );
}
