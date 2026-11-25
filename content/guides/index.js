// All guide and comparison pages. Add a new file to this folder and list it here; the guide index,
// sitemap and page routes pick it up automatically.
import * as byDate from './organize-photos-by-date-windows';
import * as whatsapp from './sort-whatsapp-photos';
import * as travel from './organize-travel-photos-by-location';
import * as backup from './organize-phone-backup-sd-card-photos';
import * as vsWindows from './pictrail-vs-windows-photos';
import * as vsGoogle from './pictrail-vs-google-photos';

export const GUIDES = [byDate, whatsapp, travel, backup, vsWindows, vsGoogle];

export const getGuide = (slug) => GUIDES.find((g) => g.meta.slug === slug);
