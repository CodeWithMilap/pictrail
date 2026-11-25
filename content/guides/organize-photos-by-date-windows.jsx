export const meta = {
  slug: 'organize-photos-by-date-windows',
  title: 'How to organize photos by date on Windows 10 and 11',
  description:
    'Three ways to sort a messy photo folder by date on Windows: File Explorer, folders by hand, or automatically with Pictrail. Step by step, in plain English.',
  published: '2026-11-25',
  updated: '2026-11-25',
};

export function Body() {
  return (
    <>
      <p className="lead">
        Phones and cameras save every photo into one big folder with names like <code>IMG_4031.jpg</code>. After a few
        months it is hard to find anything. Here are three ways to sort photos by date on Windows, from quick to fully automatic.
      </p>

      <h2>Where the date comes from</h2>
      <p>
        Most phones and cameras save a hidden <b>“Date taken”</b> inside each photo (this is called EXIF data). It stays the
        same even if you copy the file. The normal <b>file date</b> (“Date modified”) is less reliable, because it can change
        when a photo is copied, downloaded or edited. So the best way to sort is by <b>Date taken</b>.
      </p>

      <h2>Way 1: Sort by “Date taken” in File Explorer</h2>
      <p>This changes how the folder is shown, not where the files are. It is quick, but the files stay in one big folder.</p>
      <ol>
        <li>Open the folder with your photos in File Explorer.</li>
        <li>Switch to the <b>Details</b> view.</li>
        <li>Right-click any column title (like “Name”), choose <b>More…</b>, tick <b>Date taken</b> and click OK.</li>
        <li>Click the <b>Date taken</b> column to sort, or use <b>Sort</b> / <b>Group by</b> → <b>Date taken</b>.</li>
      </ol>
      <p>Good for a quick look. But nothing is really organized: open the folder on another computer or app and it is a mess again.</p>

      <h2>Way 2: Make folders by hand</h2>
      <p>
        Create one folder per month or per event (for example <code>2026-07-18 Zermatt</code>), then select photos by Date
        taken and drag them in. This works and the result lasts, but it takes a long time for thousands of photos, and it is
        easy to drag files into the wrong folder.
      </p>

      <h2>Way 3: Let Pictrail do it automatically</h2>
      <p>
        Pictrail is a Windows app that reads the Date taken and the place saved in each photo, and files every trip, outing and
        occasion into its own folder, named by date and place. For example:
      </p>
      <ul>
        <li><code>2026-03-14 to 03-15 Calangute, Goa</code></li>
        <li><code>2026-07-18 Zermatt, Valais</code></li>
        <li><code>2026-10-05 School concert</code> (named by you, for photos without a location)</li>
      </ul>
      <ol>
        <li><b>Choose a folder</b>, or drag it into Pictrail. Subfolders are included.</li>
        <li><b>Review your moments.</b> Every event is shown with previews. Rename, merge or skip anything. Nothing on your computer changes yet.</li>
        <li><b>Organize.</b> Choose move or copy, and where the folders should go. Press the button and it is done.</li>
      </ol>
      <figure>
        <img src="/screenshots/02-review.png" width="1600" height="900" loading="lazy"
          alt="Pictrail's review screen with trips to Calangute, Goa and Paris grouped automatically, grouping settings on the left and a Move button at the bottom" />
        <figcaption>Pictrail groups photos into events and shows them before anything moves.</figcaption>
      </figure>

      <h3>How Pictrail decides where one event ends</h3>
      <p>
        A new event starts when there is a long gap in time (3 hours by default) or a big move in place (2 km by default). You
        can change both. Trips over several days in the same place stay together as one folder. Photos without a location,
        like screenshots, join the event closest in time.
      </p>

      <h3>Is it safe?</h3>
      <p>
        Pictrail never deletes a photo and never overwrites a file. If a name already exists, the new file gets <code>_1</code>,{' '}
        <code>_2</code> and so on. Every run is written down first, so one click on <b>Undo</b> puts everything back, even after
        a crash or restart. Everything happens on your computer; nothing is uploaded.
      </p>

      <h2>Which way should you pick?</h2>
      <ul>
        <li><b>Just want to look at photos in order?</b> Way 1 is enough.</li>
        <li><b>A few dozen photos?</b> Way 2 works fine.</li>
        <li><b>Hundreds or thousands of photos, or a folder you sort again every few months?</b> Way 3 saves hours.</li>
      </ul>
    </>
  );
}
