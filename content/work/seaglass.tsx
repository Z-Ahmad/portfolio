export default function SeaglassEssay() {
  return (
    <>
      <p>
        A trip arrives in pieces. A flight confirmation in one inbox, a hotel PDF in another, a screenshot of a train
        ticket, a note a friend sent about a restaurant. Most travel tools give you a folder for the pieces. I wanted
        something that put them back together into the thing they actually describe: a journey across the world.
      </p>
      <p>
        Seaglass is that tool. One persistent globe carries a trip from the first booking to the last photo. It started
        in 2025 as a side project called Globeplot, and it&apos;s the product I care most about getting right.
      </p>

      <h2>One globe, three phases</h2>
      <p>The whole app is organized around the life of a trip, not around features.</p>
      <ul>
        <li>
          <strong>Build.</strong> Drop in confirmations as they land: PDFs, emails, images. Seaglass reads them and
          places each flight, stay, and reservation on the globe, so the trip grows as you book it.
        </li>
        <li>
          <strong>Travel.</strong> On the road it&apos;s meant to answer one question quickly: what&apos;s now, and
          what&apos;s next. Directions already hand off to the maps app you use; the rest of travel mode is in progress.
        </li>
        <li>
          <strong>Memory.</strong> Afterwards the trip becomes something to keep: the route on the globe, a gallery,
          and a public link anyone can open.
        </li>
      </ul>

      <h2>The globe is the application</h2>
      <p>
        The globe is not a map widget inside a page. It&apos;s a single canvas that never unloads. The dashboard, a trip,
        and your profile are all views over the same globe, so opening a trip is a flight to it rather than a page swap.
        The interface floats above it in frosted glass, with the map visible through it.
      </p>
      <blockquote>Features are easy to copy. The feel isn&apos;t. When a change and the feel conflict, the feel wins.</blockquote>
      <p>
        That rule decides a lot. Panels morph from one shape into the next instead of cutting. Motion is saved for
        moments that mean something, like a document turning into stops on the globe, and kept out of everyday chrome.
        Everything uses springs rather than linear tweens. The bottom sheet on mobile settles with a damping ratio
        of about 0.8 and a response of about 0.3&nbsp;seconds, so it keeps a trace of your throw instead of snapping.
        And all of it honors <code>prefers-reduced-motion</code>.
      </p>

      <h2>Reading bookings</h2>
      <p>
        Parsing is server-side: OCR, then a structured read of each booking into events with places, times, and
        confirmation numbers. Small things matter here. A confirmation that says &ldquo;Sat, Oct&nbsp;10&rdquo; with no
        year gets its year filled in from context before parsing, so a trip next spring doesn&apos;t land last spring.
        Images, including HEIC from an iPhone, are resized on the device before upload.
      </p>
      <p>
        Intelligence stays ambient. There&apos;s no chat window and no assistant persona. The AI reads your documents
        and then gets out of the way.
      </p>

      <h2>An honest business</h2>
      <p>The pricing is meant to be something I&apos;d be happy to explain to a friend.</p>
      <ul>
        <li>One plan, Pro, sold as a 12-month pass that simply expires. No auto-renew.</li>
        <li>
          When a pass lapses nothing gets locked. Your trips, files, and photos stay yours. Only new parses stop.
        </li>
        <li>The paywall is the parse, not the file. Attachments are unlimited on the free plan.</li>
        <li>Public share links are always free, and people you invite to edit never pay.</li>
        <li>No ads, no affiliate links, no booking commissions, no tracking.</li>
      </ul>

      <h2>How it&apos;s built</h2>
      <p>
        A React&nbsp;19 PWA on Vite, with Mapbox&nbsp;GL for the globe, Zustand for state, and Motion for the morphs. An
        Express API on Firebase handles auth, storage, sharing, and invitations, with Mistral for reading documents. The
        domain logic lives in a shared core package, and the same product is being carried into a native iPhone app in
        Swift. It&apos;s a solo project, so the tooling matters: every commit passes the same gates of type checks,
        React lint rules, unit and rules tests, and end-to-end tests against local emulators.
      </p>
    </>
  );
}
