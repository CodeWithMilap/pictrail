export const meta = {
  slug: 'organize-phone-backup-sd-card-photos',
  title: 'How to organize phone backups and SD card photos on Windows',
  description:
    'Copy photos from your phone or SD card to a Windows PC safely, then sort years of backups into folders by date and place without losing a single file.',
  published: '2026-11-25',
  updated: '2026-11-25',
};

export function Body() {
  return (
    <>
      <p className="lead">
        Many people have a folder called “Phone backup” or “SD card 2024” with thousands of photos inside. Here is how to get
        photos onto your PC safely, and how to turn those big dumps into folders you can actually use.
      </p>

      <h2>Step 1: Copy the photos to your PC</h2>
      <h3>From an Android phone</h3>
      <ol>
        <li>Connect the phone with a USB cable and unlock it.</li>
        <li>On the phone, choose <b>File transfer</b> when it asks how to use USB.</li>
        <li>In File Explorer, open the phone, then the <code>DCIM</code> folder, and copy it to your PC.</li>
      </ol>
      <h3>From an iPhone</h3>
      <ol>
        <li>Connect the iPhone with a cable, unlock it and tap <b>Trust</b>.</li>
        <li>In File Explorer, open the iPhone, then <code>Internal Storage</code> → <code>DCIM</code>, and copy the folders to your PC.</li>
      </ol>
      <h3>From a camera SD card</h3>
      <ol>
        <li>Put the card in your PC’s card reader (or a USB card reader).</li>
        <li>Open it in File Explorer and copy the <code>DCIM</code> folder to your PC.</li>
      </ol>
      <p className="note">Copy first, then check the photos open on your PC, before you delete anything from the phone or card.</p>

      <h2>Step 2: Sort the backup into folders</h2>
      <p>
        A phone backup is usually one long list of files in date order, spread over folders like <code>100APPLE</code> or{' '}
        <code>Camera</code>. Pictrail can turn it into one folder per trip, outing and occasion:
      </p>
      <ol>
        <li>Open Pictrail and choose the backup folder. All subfolders are scanned too.</li>
        <li>Pictrail reads the date and place inside each photo and groups them into events.</li>
        <li>Review the events: rename, merge or skip any of them.</li>
        <li>Choose <b>Copy</b> to keep the backup as it is and build a sorted copy elsewhere, or <b>Move</b> to tidy the backup itself.</li>
        <li>Press Organize.</li>
      </ol>
      <p>
        Pictrail reads JPEG, PNG, HEIC/HEIF (iPhone photos), WebP, TIFF and DNG files. Photos without a location join the
        event closest in time.
      </p>

      <h2>Step 3: Undo if you change your mind</h2>
      <p>
        Every run is written to a log before any file moves. The Pictrail home screen lists your <b>Recent runs</b>, so you can
        undo a run even after closing the app or restarting your PC.
      </p>
      <figure>
        <img src="/screenshots/05-recent-runs.png" width="1600" height="900" loading="lazy"
          alt="Pictrail home screen with a Recent runs list showing 'Copied 59 photos' and an Undo button" />
        <figcaption>Recent runs on the home screen, with Open and Undo.</figcaption>
      </figure>

      <h2>Good to know</h2>
      <ul>
        <li><b>No photo is ever deleted or overwritten.</b> If two files have the same name, the second becomes <code>IMG_001_1.jpg</code>.</li>
        <li><b>Pictrail does not remove duplicates.</b> If you copied the same photos twice, both copies are kept.</li>
        <li><b>Everything stays on your PC.</b> Nothing is uploaded, and it works offline.</li>
        <li><b>Keep a backup</b> of photos that matter to you, for example on an external drive.</li>
      </ul>
    </>
  );
}
