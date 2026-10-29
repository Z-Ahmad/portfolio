import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-12 pt-24">
      <div className="flex flex-col gap-3 border-t border-hairline pt-6 text-sm text-faint sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js and set in Playfair Display and Geist.
        </p>
        <p>No analytics, no cookies, no tracking.</p>
      </div>
    </footer>
  );
}
