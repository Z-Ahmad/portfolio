export default function ZenithEssay() {
  return (
    <>
      <p>
        Zenith is a document workspace: pages inside pages, a rich text editor, and live collaboration. I built it to
        learn what it takes to make an editor feel instant when several people are typing in the same document.
      </p>

      <h2>What it does</h2>
      <ul>
        <li>Nested documents, browsable as a tree in the sidebar.</li>
        <li>Block-based rich text editing, with cover images and an emoji icon per page.</li>
        <li>Real-time sync, so changes appear for everyone without a refresh.</li>
        <li>Publishing: any page can be shared publicly through its own URL.</li>
        <li>Light and dark themes, plus quick search across pages.</li>
      </ul>

      <h2>How it&apos;s built</h2>
      <p>
        Next.js and TypeScript on the front end, with Convex as a reactive backend so queries update live. BlockNote
        powers the editor, Clerk handles sign-in, and EdgeStore holds uploaded images.
      </p>
    </>
  );
}
