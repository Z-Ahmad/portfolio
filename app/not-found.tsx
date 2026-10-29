import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-32">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">Nothing here.</h1>
      <p className="mt-4 text-muted">
        The page you were looking for doesn&apos;t exist, or it moved.{" "}
        <Link href="/" className="link text-ink">
          Head home
        </Link>
        .
      </p>
    </div>
  );
}
