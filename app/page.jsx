import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Icon, Pin } from '../components/SvgDefs';
import { SITE } from '../lib/site';

const TRAIL_A = 'M340 236 C 372 300, 430 252, 456 288 S 476 300, 483 316';
const TRAIL_B = 'M296 412 C 360 400, 400 350, 440 338 S 470 326, 483 318';

const MESSY = [
  'IMG_4031.jpg', 'WhatsApp Image 2026-03-14 at 18.22.07.jpeg', 'DSC_0012.JPG', 'IMG_4032.HEIC',
  'PXL_20260718_081522.jpg', 'IMG_4188.jpg', '20260822_183011.jpg', 'IMG_4407.HEIC', 'DSC_0113.JPG',
];

const FOLDERS = [
  { name: '2026-03-14 to 03-15 Calangute, Goa', meta: '14 photos · 2 days', thumbs: ['beach', 'shore', 'sunset'] },
  { name: '2026-05-02 to 05-03 Paris, Île-de-France', meta: '11 photos · 2 days', thumbs: ['city', 'dusk'] },
  { name: '2026-07-18 Zermatt, Valais', meta: '9 photos', thumbs: ['alps'] },
  { name: '2026-08-22 New York City', meta: '8 photos', thumbs: ['party'] },
  { name: '2026-09-12 to 09-13 Yosemite Valley', meta: '11 photos · 2 days', thumbs: ['forest'] },
  { name: '2026-10-05 School concert', meta: '6 photos · named by you', thumbs: ['concert'] },
];

const MARKERS = [
  { n: 1, left: '49%', top: '13%', title: 'Trips found for you', text: 'Each trip and outing gets its own group, named by date and place.' },
  { n: 2, left: '15.5%', top: '16%', title: 'Tune the grouping', text: 'Choose how long a gap, or how far a move, starts a new event.' },
  { n: 3, left: '80%', top: '50%', title: 'Merge in one click', text: 'Two days that belong together? Merge them. Rename anything in place.' },
  { n: 4, left: '8.6%', top: '88%', title: 'Move or copy', text: 'Into the same folder or a new one, and undo it whenever you like.' },
];

const FEATURES = [
  ['Sorted by date and place', 'Folders get real names, like “2026-07-18 Zermatt, Valais”, from the time and GPS your phone or camera saved.'],
  ['Trips stay together', 'A weekend away is one folder, not three. A drive across town starts a new one. You decide the gaps.'],
  ['You stay in control', 'Review first. Rename, merge, or skip events. Move or copy, into the same folder or anywhere you choose.'],
  ['Undo, even days later', 'Every move is written down before it happens. One click puts everything back, even after a crash or restart.'],
  ['Never overwrites', 'Pictrail never deletes a photo and never replaces a file. Name clashes simply become IMG_001_1.jpg.'],
  ['Every format you shoot', 'JPEG, PNG, HEIC/HEIF, WebP, TIFF and DNG. Screenshots and WhatsApp images join the nearest moment in time.'],
];

const STOPS = [
  ['01-home.png', 'Pictrail start screen with a Choose a folder button', 'Choose a folder', 'Your camera roll, an SD card or any folder. Or just drag it in.'],
  ['03-name-events.png', 'Naming an event without a location: School concert', 'Review your moments', 'See every event with previews. Name the ones without a location.'],
  ['04-done.png', 'All organized: 59 photos copied into 6 folders', 'Organize, and relax', 'Neatly named folders in seconds, and undo is always one click away.'],
];

const FAQ = [
  ['How does the free trial work?', <>Download Pictrail and use every feature free for 14 days. No card, no account. After the trial you can still scan, review and undo. To organize photos again, buy a license and paste the key into Pictrail.</>],
  ['How do I unlock Pictrail after buying?', <>Gumroad e-mails you a license key right after you pay. In Pictrail, click the orange <b>Trial</b> badge (or About → Manage license), paste the key and press <b>Activate</b>. You need the internet for a moment to activate.</>],
  ['Can I use it on more than one computer?', <>Yes, one license works on up to 3 of your own computers. If you replace a computer and run out of activations, e-mail us and we'll reset your key.</>],
  ['Will it delete or overwrite my photos?', <>No. Pictrail never deletes photos and never overwrites a file: if a name already exists, the new file gets _1, _2 and so on. Every run writes a log first, so it can be undone, even after a crash or restart. We still recommend keeping a backup of photos that matter to you.</>],
  ['What about photos without a location, like screenshots?', <>They're grouped by the time they were taken (or the file date) and join the nearest event in time. Events with no location at all are marked so you can give them a name, like “School concert”.</>],
  ['Can I get a refund?', <>All sales are final. That's why every feature is free to try for 14 days first: please make sure Pictrail works for you before buying. If something doesn't work, e-mail <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and we'll help you fix it.</>],
  ['Windows says “Windows protected your PC”', <>Windows shows this for new apps it hasn't seen many times yet. Click <b>More info</b>, then <b>Run anyway</b>.</>],
  ['Does it need the internet?', <>No. Everything works offline. The internet is only used to activate your license (and a quick check about once a week; it keeps working offline for up to 30 days), if you turn on “Detailed place names”, and to check for updates.</>],
  ['Does it work on Mac or Linux?', <>Pictrail 1.0 is for Windows 10 and 11. Mac and Linux versions are planned.</>],
  ['How do I uninstall it?', <>Windows Settings → Apps → Installed apps → Pictrail → Uninstall. Your photos and folders stay exactly where they are.</>],
];

const FAN = [['alps', -14, 14], ['city', -6, 2], ['beach', 2, -4], ['party', 9, 3], ['forest', 16, 16]];

const scene = (name) => `/assets/scenes/${name}.jpg`;

function TrialButton({ className = 'btn btn-primary', children = 'Try free for 14 days' }) {
  return (
    <a className={className} href={SITE.trialUrl}>
      <Icon name="windows" />
      {children}
    </a>
  );
}

export const metadata = { alternates: { canonical: '/' } };

// Plain text of a FAQ answer (the answers above are JSX), so the FAQ schema always matches the visible text.
const toText = (node) =>
  typeof node === 'string' || typeof node === 'number' ? String(node)
    : Array.isArray(node) ? node.map(toText).join('')
      : node?.props ? toText(node.props.children) : '';

const id = (name) => `${SITE.url}/#${name}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': id('website'), url: SITE.url, name: SITE.name, publisher: { '@id': id('publisher') } },
    { '@type': 'Person', '@id': id('publisher'), name: SITE.seller },
    {
      '@type': 'SoftwareApplication',
      '@id': id('app'),
      name: 'Pictrail',
      url: SITE.url,
      image: `${SITE.url}/assets/logo.svg`,
      screenshot: `${SITE.url}/screenshots/02-review.png`,
      operatingSystem: 'Windows 10, Windows 11',
      applicationCategory: 'MultimediaApplication',
      softwareVersion: SITE.version,
      downloadUrl: SITE.trialUrl,
      author: { '@id': id('publisher') },
      publisher: { '@id': id('publisher') },
      offers: { '@type': 'Offer', price: SITE.priceNumber, priceCurrency: 'USD', url: SITE.buyUrl },
      description: 'Sorts photos into folders for every trip, outing and occasion using the date and place saved in each photo.',
    },
    {
      '@type': 'FAQPage',
      '@id': id('faq'),
      mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: toText(a) } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <SiteHeader home />

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <span className="stamp"><Pin />Photo organizer for Windows</span>
              <h1>
                Your photos, sorted into the{' '}
                <span className="underline">
                  <em className="ink">moments</em>
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M2 14 C 50 4, 120 4, 198 12" /></svg>
                </span>{' '}
                they belong to.
              </h1>
              <p className="lead">
                Pictrail reads the date and place hidden inside every photo, and files each trip, outing and occasion into its own
                neatly named folder. In seconds. Nothing is uploaded.
              </p>
              <div className="cta">
                <TrialButton />
                <a className="btn btn-ghost" href={SITE.buyUrl}>Buy Pictrail · <span className="price-tag">{SITE.price}</span></a>
              </div>
              <ul className="meta">
                {SITE.sale && <li><b style={{ color: 'var(--trail-ink)' }}>{SITE.sale}</b></li>}
                <li>Windows 10 &amp; 11</li>
                <li>One-time price</li>
                <li>Works offline</li>
              </ul>
            </div>

            <div className="stage" role="img" aria-label="Three loose beach photos follow a dotted trail into one folder named 2026-03-14 to 03-15 Calangute, Goa">
              <figure className="polaroid p1"><img src={scene('beach')} alt="" width="640" height="480" /><figcaption>Calangute · 14 Mar</figcaption></figure>
              <figure className="polaroid p2"><img src={scene('shore')} alt="" width="640" height="480" /><figcaption>Baga · 14 Mar</figcaption></figure>
              <figure className="polaroid p3"><img src={scene('sunset')} alt="" width="640" height="480" /><figcaption>Sunset · 15 Mar</figcaption></figure>
              <svg className="trail-svg" viewBox="0 0 600 612" aria-hidden="true">
                <defs>
                  <mask id="trail-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="612">
                    <path className="mask-path" pathLength="100" d={TRAIL_A} fill="none" stroke="#fff" strokeWidth="16" />
                    <path className="mask-path" pathLength="100" d={TRAIL_B} fill="none" stroke="#fff" strokeWidth="16" />
                  </mask>
                </defs>
                <g mask="url(#trail-mask)">
                  <path className="dots" d={TRAIL_A} />
                  <path className="dots" d={TRAIL_B} />
                </g>
              </svg>
              <Pin className="pin" />
              <div className="folder-card">
                <span className="check-badge" aria-hidden="true"><Icon name="check" /></span>
                <div className="fc-top">
                  <Icon name="folder" className="fc-icon" style={{ color: 'var(--blue)', height: 'auto', aspectRatio: '1' }} />
                  <div>
                    <div className="fc-name">2026-03-14 to 03-15 Calangute, Goa</div>
                    <div className="fc-meta">14 photos · 2 days · sorted automatically</div>
                  </div>
                </div>
                <div className="fc-thumbs">
                  {['beach', 'shore', 'sunset'].map((s) => <img key={s} src={scene(s)} alt="" width="640" height="480" />)}
                  <span className="fc-more">+11</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BEFORE / AFTER ============ */}
        <section id="how-it-looks">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="kicker">The problem, solved</span>
              <h2>
                From <span style={{ fontFamily: 'var(--mono)', fontSize: '.62em', letterSpacing: '-.02em' }}>IMG_4031.jpg</span> to{' '}
                <em className="ink">Goa, March 2026.</em>
              </h2>
              <p>Phones and cameras dump everything into one endless folder. Pictrail turns it into a story you can actually find your way around.</p>
            </div>
            <div className="ba">
              <div className="panel reveal">
                <div className="panel-bar"><b>Camera Roll</b> · 2,841 items <span className="tag tag-before">Before</span></div>
                <ul className="messy">
                  {MESSY.map((f) => <li key={f}><span className="fi" />{f}</li>)}
                  <li>…and 2,832 more</li>
                </ul>
              </div>
              <div className="ba-arrow reveal" aria-hidden="true">
                <svg viewBox="0 0 100 40">
                  <path className="dots" d="M4 26 C 30 2, 60 40, 84 18" />
                  <path d="M80 8 L92 16 L80 26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="panel reveal">
                <div className="panel-bar"><b>Organized</b> · 6 folders <span className="tag tag-after">After</span></div>
                <ul className="folders">
                  {FOLDERS.map((f) => (
                    <li key={f.name}>
                      <Icon name="folder" className="f-icon" />
                      <span className="f-name">{f.name}<small>{f.meta}</small></span>
                      <span className="f-thumbs">{f.thumbs.map((t) => <img key={t} src={scene(t)} alt="" width="640" height="480" loading="lazy" />)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ THE APP ============ */}
        <section className="night" id="app">
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="kicker">Meet the app</span>
              <h2>You review. Pictrail does the sorting.</h2>
              <p>Every event is laid out with previews before a single file moves. Change what you like, then press one button.</p>
            </div>
            <div className="window reveal">
              <div className="window-bar">
                <img src="/assets/logo.svg" alt="" width="16" height="16" />Pictrail
                <span className="wctl" aria-hidden="true">
                  <span><svg viewBox="0 0 10 10"><path d="M1 5h8" /></svg></span>
                  <span><svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" fill="none" /></svg></span>
                  <span><svg viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" /></svg></span>
                </span>
              </div>
              <div className="window-shot">
                <img src="/screenshots/02-review.png" width="1600" height="900" loading="lazy"
                  alt="Pictrail's review screen: trips to Calangute, Goa and Paris grouped automatically, with grouping settings on the left and a Move button at the bottom" />
                {MARKERS.map((m) => <span key={m.n} className="marker" style={{ left: m.left, top: m.top }} aria-hidden="true">{m.n}</span>)}
              </div>
            </div>
            <ol className="legend">
              {MARKERS.map((m) => (
                <li key={m.n} className="reveal"><span className="n">{m.n}</span><div><b>{m.title}</b><span>{m.text}</span></div></li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section id="features">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="kicker">Why people keep it</span>
              <h2>Built like a careful <em className="ink">travel companion.</em></h2>
            </div>
            <div className="entries">
              {FEATURES.map(([title, text], i) => (
                <article key={title} className="entry reveal">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section id="how" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="kicker">Three stops</span>
              <h2>Folder in. Moments out.</h2>
              <p>Nothing changes on your computer until you press Organize.</p>
            </div>
            <ol className="stops">
              {STOPS.map(([file, alt, title, text], i) => (
                <li key={file} className="stop reveal">
                  <div className="stop-pin"><span>{i + 1}</span></div>
                  <img src={`/screenshots/${file}`} width="1600" height="900" alt={alt} loading="lazy" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ PRIVACY ============ */}
        <section>
          <div className="wrap">
            <div className="privacy reveal">
              <div className="seal" aria-hidden="true">
                <svg viewBox="0 0 200 200">
                  <defs><path id="seal-circle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" /></defs>
                  <g className="ring"><text><textPath href="#seal-circle">PRIVATE · OFFLINE · NO CLOUD · NO ACCOUNT ·</textPath></text></g>
                  <circle cx="100" cy="100" r="56" fill="var(--trail)" />
                  <path d="M100 66l26 10v20c0 17-11 27-26 31-15-4-26-14-26-31V76z" fill="none" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
                  <path d="M88 99l9 9 16-18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <span className="kicker">Private by design</span>
                <h2>Your photos never leave your computer.</h2>
                <p>
                  No account, no analytics, no cloud. Place names come from a list built into the app. Only if you switch on
                  “Detailed place names” are GPS coordinates (never photos) sent to OpenStreetMap. <a href="/privacy">Read the privacy policy</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section id="pricing" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="section-head center reveal">
              <span className="kicker">Pricing</span>
              <h2>One ticket. Every trip.</h2>
              <p>Try everything free for 14 days. Then pay once, and it&apos;s yours.</p>
              {SITE.sale && <span className="stamp" style={{ marginTop: 18 }}>{SITE.sale}</span>}
            </div>
            <div className="ticket-wrap reveal">
              <div className="ticket">
                <div className="t-main">
                  <div className="t-top">
                    <span className="logo"><img src="/assets/logo.svg" alt="" width="26" height="26" />Pictrail</span>
                    <span>Lifetime license</span>
                  </div>
                  <div className="route">
                    <div><small>From</small><strong>One messy camera roll</strong></div>
                    <div className="route-line" aria-hidden="true">
                      <svg viewBox="0 0 120 30"><path className="dots" d="M4 22 C 40 -4, 80 34, 108 12" /><use href="#i-pin" x="100" y="-6" width="18" height="26" /></svg>
                    </div>
                    <div className="to"><small>To</small><strong>Moments, sorted</strong></div>
                  </div>
                  <div className="t-details">
                    <div><small>Seats</small><span>3 computers</span></div>
                    <div><small>Fare</small><span>One-time</span></div>
                    <div><small>Updates</small><span>Version 1</span></div>
                    <div><small>Valid on</small><span>Windows 10 &amp; 11</span></div>
                  </div>
                  <div className="t-buy">
                    <a className="btn btn-trail" href={SITE.buyUrl}>Buy Pictrail · <span className="price-tag">{SITE.price}</span></a>
                    <a className="try" href="#download">or try it free for 14 days →</a>
                  </div>
                </div>
                <div className="t-stub">
                  <span className="admit">Admit one</span>
                  <div>
                    <div className="fare"><sup>$</sup>{SITE.priceNumber}</div>
                    <div className="once">one-time · no subscription</div>
                  </div>
                  <div className="barcode" aria-hidden="true" />
                </div>
              </div>
            </div>
            <p className="ticket-note">Secure checkout by Gumroad. Your license key arrives by e-mail straight away. All sales are final, so please try the free trial first.</p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" style={{ paddingTop: 20 }}>
          <div className="wrap faq-grid">
            <div className="section-head reveal">
              <span className="kicker">Questions</span>
              <h2>Good to know.</h2>
              <p>Something else? E-mail <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.</p>
            </div>
            <div className="faq">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINALE ============ */}
        <section className="night finale" id="download">
          <div className="wrap">
            <div className="fan reveal" aria-hidden="true">
              {FAN.map(([s, r, y]) => <img key={s} src={scene(s)} alt="" width="640" height="480" loading="lazy" style={{ '--r': `${r}deg`, '--y': `${y}px` }} />)}
            </div>
            <span className="kicker reveal">Start your trail</span>
            <h2 className="reveal">Every trip deserves its own folder.</h2>
            <p className="reveal">Try Pictrail free for 14 days. No card, no account. About 110 MB, for Windows 10 and 11 (64-bit).</p>
            <div className="cta reveal">
              <TrialButton className="btn btn-trail">Download free trial</TrialButton>
              {SITE.storeUrl && <a className="btn btn-ghost" href={SITE.storeUrl}>Get it from Microsoft Store</a>}
              <a className="btn btn-ghost" href={SITE.buyUrl}>Buy · {SITE.price}</a>
            </div>
            <p className="fine reveal">
              Already bought it? Install the same download and enter your license key. By downloading you agree to the{' '}
              <a href="/terms">license agreement</a>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
