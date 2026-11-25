export const meta = {
  slug: 'sort-whatsapp-photos',
  title: 'How to sort WhatsApp photos on your PC',
  description:
    'Why WhatsApp photos lose their date and place, where to find them, and how to sort them into folders on Windows together with your camera photos.',
  published: '2026-11-25',
  updated: '2026-11-25',
};

export function Body() {
  return (
    <>
      <p className="lead">
        WhatsApp images pile up fast: family photos, trip pictures from friends, forwarded memes. And they are harder to sort
        than camera photos. Here is why, and what you can do about it.
      </p>

      <h2>Why WhatsApp photos are hard to sort</h2>
      <p>
        When a photo is sent on WhatsApp, the app makes it smaller and removes most of the hidden information inside it,
        including the original <b>date taken</b> and the <b>GPS location</b>. What is left is the file name and the file date,
        which is usually when the photo was received or saved, not when it was taken.
      </p>
      <p>That is why a beach photo a friend took in March can show up as if it was taken in April, the day they sent it.</p>

      <h2>Where to find WhatsApp photos</h2>
      <ul>
        <li><b>Android:</b> in the phone storage, under <code>Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images</code> (older phones: <code>WhatsApp/Media/WhatsApp Images</code>). File names look like <code>IMG-20260314-WA0012.jpg</code>.</li>
        <li><b>WhatsApp Desktop or Web:</b> saved images go to your Downloads folder, with names like <code>WhatsApp Image 2026-03-14 at 18.22.07.jpeg</code>.</li>
        <li><b>iPhone:</b> if “Save to Photos” is on, they are mixed into your camera roll.</li>
      </ul>
      <p>Connect your phone with a USB cable and copy that folder to your PC before sorting.</p>

      <h2>Tip: get originals with the date and place</h2>
      <p>
        If you want a friend’s trip photos with their real date and location, ask them to send the photos <b>as a document</b>{' '}
        (in WhatsApp: attach → Document → choose the photos). Files sent this way are not compressed, and the hidden information
        stays inside.
      </p>

      <h2>Sorting WhatsApp photos with Pictrail</h2>
      <p>
        Pictrail sorts photos by the date and place saved inside them. For WhatsApp images, which usually have neither,
        Pictrail uses the file date and adds each image to the event closest in time. So if you put WhatsApp images in the same
        folder as your camera photos, the pictures your friends sent from a trip usually end up in that trip’s folder.
      </p>
      <ol>
        <li>Copy your camera photos and WhatsApp images into one folder (or a folder with subfolders).</li>
        <li>Open Pictrail and choose that folder.</li>
        <li>Review the events. Events with no location at all are marked, so you can give them a name like “Birthday party”.</li>
        <li>Choose <b>Copy</b> if you want to keep the originals where they are, or <b>Move</b> to tidy up. Then press Organize.</li>
      </ol>
      <figure>
        <img src="/screenshots/03-name-events.png" width="1600" height="900" loading="lazy" alt="Naming an event without a location: School concert" />
        <figcaption>Events without a location can be named before organizing.</figcaption>
      </figure>
      <p className="note">
        Because WhatsApp images only keep the date they were received, they may not always land in the right event. That is
        why Pictrail shows everything for review first, and why <b>Undo</b> is always one click away.
      </p>

      <h2>Short version</h2>
      <ul>
        <li>WhatsApp removes the date taken and the location from photos.</li>
        <li>Ask for photos “as a document” when you want the originals.</li>
        <li>Put WhatsApp images next to your camera photos and let Pictrail add them to the nearest event in time.</li>
      </ul>
    </>
  );
}
