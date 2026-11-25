import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { SITE, pageOpenGraph } from '../../lib/site';

const title = 'Privacy policy';
const description = 'Pictrail privacy policy: your photos never leave your computer.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/privacy' },
  openGraph: pageOpenGraph({ title: `${title} — ${SITE.name}`, description, path: '/privacy' }),
};

const mail = <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>;

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="wrap">
        <article className="doc">
          <h1>Privacy policy</h1>
          <p className="updated">Last updated: 25 November 2026</p>

          <p>
            <b>The short version:</b> Pictrail works on your computer. Your photos never leave it. The app has no accounts,
            analytics, ads or tracking. When you buy Pictrail, the store you buy from (Gumroad or Microsoft) shares your e-mail
            address and order with us so we can provide your license and support. We never sell personal data.
          </p>

          <h2>Who we are</h2>
          <p>Pictrail is published by {SITE.seller}, India (“we”). Contact: {mail}.</p>

          <h2>What the app does with your photos</h2>
          <p>
            Pictrail reads the date and GPS location stored inside your photo files (EXIF data) to group them, and moves or copies
            the files into folders on your computer when you press Organize. All of this happens locally. Photos, thumbnails and
            file names are never uploaded.
          </p>

          <h2>What the app stores on your computer</h2>
          <table>
            <thead><tr><th>What</th><th>Where</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td>Your settings (gap, distance, options)</td><td>Pictrail&apos;s app-data folder</td><td>So they&apos;re remembered next time</td></tr>
              <tr><td>List of recent runs (date, folder, photo count)</td><td>Pictrail&apos;s app-data folder</td><td>So you can undo from the home screen</td></tr>
              <tr><td>Undo log (which file moved where)</td><td>A hidden <code>.photo-organizer</code> folder inside the folder you organized</td><td>So Undo can put files back</td></tr>
              <tr><td>Trial start date, your license key and the e-mail address it was bought with</td><td>Pictrail&apos;s app-data folder</td><td>To know if the trial is over and to show who the license belongs to</td></tr>
            </tbody>
          </table>
          <p>None of this is sent to us. Uninstalling removes the app-data folder; you can delete the undo logs yourself at any time.</p>

          <h2>When the app uses the internet</h2>
          <p>Pictrail works fully offline. It only connects to the internet in these cases:</p>
          <ul>
            <li>
              <b>“Detailed place names” (off by default).</b> If you turn it on, the GPS coordinates of each event (not your photos)
              are sent to the OpenStreetMap Nominatim service to look up names like parks and beaches. That service sees the
              coordinates and your IP address and handles them under the{' '}
              <a href="https://osmfoundation.org/wiki/Privacy_Policy" rel="noopener">OpenStreetMap Foundation privacy policy</a>.
            </li>
            <li>
              <b>License checks (Gumroad version only).</b> When you enter your license key, and about once a week after that, the app
              sends your license key and our product ID to Gumroad to check the key is valid. Gumroad answers with the purchase
              details (such as the e-mail address used and whether it was refunded). Gumroad handles this under the{' '}
              <a href="https://gumroad.com/privacy" rel="noopener">Gumroad privacy policy</a>.
            </li>
            <li>
              <b>Update checks (version downloaded from this website only).</b> When it starts, the app checks Pictrail&apos;s release
              page on GitHub for a newer version, and downloads it if there is one. GitHub can see your IP address and the app
              version, under the <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub Privacy Statement</a>.
              The Microsoft Store version is updated by the Store instead.
            </li>
            <li><b>Links you click</b> (website, privacy policy, e-mail support) open in your browser or e-mail app.</li>
          </ul>

          <h2>Buying on Gumroad</h2>
          <p>
            Purchases are handled by Gumroad, which collects your payment details. We never see your card details. Gumroad shares
            your name, e-mail address and order details with us. We use them only to provide your license, answer support requests
            and meet tax and accounting rules. We keep them as long as those rules require. We don&apos;t send marketing e-mails
            unless you opted in on Gumroad.
          </p>

          <h2>Microsoft Store</h2>
          <p>
            If you install Pictrail from the Microsoft Store, Microsoft handles the download, install and updates under the{' '}
            <a href="https://privacy.microsoft.com/privacystatement" rel="noopener">Microsoft Privacy Statement</a>. We may see
            anonymous, aggregated statistics from Microsoft (such as install counts by country).
          </p>

          <h2>This website</h2>
          <p>
            This website uses no cookies and no third-party fonts. To count visits, it uses Cloudflare Web Analytics, which
            does not use cookies, does not track you across websites and does not collect personal data. Our hosting provider
            may keep standard server logs (IP address, pages requested, time) for security and to keep the site running. The free
            trial download is served from GitHub.
          </p>

          <h2>E-mail</h2>
          <p>If you e-mail us, we use your e-mail address and message only to reply to you, and delete them when they&apos;re no longer needed.</p>

          <h2>Children</h2>
          <p>The app collects no personal data from anyone, including children. Purchases must be made by an adult.</p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of the personal data we hold about you (your order and any e-mails), or ask us to correct or
            delete it, except where we must keep order records by law. E-mail {mail}.
          </p>

          <h2>Changes</h2>
          <p>If this policy changes, we&apos;ll update the date at the top of this page. Significant changes will also be mentioned in the app&apos;s release notes.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
