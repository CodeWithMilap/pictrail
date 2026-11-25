import { Icon } from './SvgDefs';
import { SITE } from '../lib/site';

// Closing box on every guide: the same trial and buy links as the home page.
export default function GuideCta() {
  return (
    <aside className="guide-cta">
      <h2>Try Pictrail free for 14 days</h2>
      <p>Every feature, no card, no account. For Windows 10 and 11.</p>
      <div className="cta">
        <a className="btn btn-primary" href={SITE.trialUrl}><Icon name="windows" />Download free trial</a>
        <a className="btn btn-ghost" href={SITE.buyUrl}>Buy Pictrail · {SITE.price}</a>
      </div>
    </aside>
  );
}
