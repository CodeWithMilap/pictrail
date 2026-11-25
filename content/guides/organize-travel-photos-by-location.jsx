export const meta = {
  slug: 'organize-travel-photos-by-location',
  title: 'How to organize travel photos by location on Windows',
  description:
    'Turn a camera roll full of trips into folders named by date and place. How photo locations work, how to switch them on, and how to sort trips on Windows.',
  published: '2026-11-25',
  updated: '2026-11-25',
};

export function Body() {
  return (
    <>
      <p className="lead">
        After a holiday, your trip photos sit between grocery lists and screenshots. The best way to keep them is one folder per
        trip, with the date and the place in the name, like <code>2026-03-14 to 03-15 Calangute, Goa</code>.
      </p>

      <h2>How photos know where they were taken</h2>
      <p>
        When location is switched on for your camera, your phone saves the GPS position inside every photo, next to the date
        taken. You can see it in Windows: right-click a photo → <b>Properties</b> → <b>Details</b>, and look for <b>GPS</b>.
      </p>
      <ul>
        <li><b>iPhone:</b> Settings → Privacy &amp; Security → Location Services → Camera → “While Using the App”.</li>
        <li><b>Android:</b> open the Camera app settings and turn on the location option (often called “Location tags” or “Save location”).</li>
        <li><b>Cameras:</b> most cameras have no GPS. Their photos have a date but no place.</li>
      </ul>

      <h2>Sorting by place by hand</h2>
      <p>
        Windows has no built-in way to sort photo files into folders by place. By hand, you would need to open each photo’s
        location, work out the town, create a folder and move the photos. That is fine for one trip, but not for years of photos.
      </p>

      <h2>Sorting trips automatically with Pictrail</h2>
      <p>
        Pictrail reads the date and GPS location in every photo and groups them into trips and outings. Each group gets a folder
        named by date and place.
      </p>
      <ul>
        <li><b>A new place starts a new event.</b> By default, moving more than 2 km or a gap of more than 3 hours starts a new group. You can change both.</li>
        <li><b>Multi-day trips stay together.</b> Back-to-back days in the same place become one folder, like <code>2026-09-12 to 09-13 Yosemite Valley</code>.</li>
        <li><b>Photos without GPS</b>, like screenshots or camera photos, join the event closest in time.</li>
        <li><b>Events with no location at all</b> are marked, so you can name them yourself.</li>
      </ul>
      <figure>
        <img src="/screenshots/02-review.png" width="1600" height="900" loading="lazy"
          alt="Pictrail's review screen with trips to Calangute, Goa and Paris grouped automatically" />
        <figcaption>Trips found automatically, named by date and place.</figcaption>
      </figure>

      <h3>Where the place names come from</h3>
      <p>
        Pictrail has a built-in list of towns and cities, so it works fully offline. It uses the nearest town, so a photo at a
        famous landmark may be named after the town next to it. If you want more exact names, like parks and beaches, you can
        turn on <b>“Detailed place names”</b>. Then only the GPS coordinates of each event (never your photos) are sent to
        OpenStreetMap to look up the name. It is off by default.
      </p>

      <h3>Your photos stay safe</h3>
      <p>
        Nothing changes until you press Organize. Pictrail never deletes or overwrites a photo, and every run can be undone with
        one click, even days later.
      </p>

      <h2>Short version</h2>
      <ol>
        <li>Make sure location is on for your phone’s camera before your next trip.</li>
        <li>Copy all trip photos to your PC.</li>
        <li>Open the folder in Pictrail, check the trips it found, and press Organize.</li>
      </ol>
    </>
  );
}
