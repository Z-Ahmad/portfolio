type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Off-site link with an arrow that nudges on hover. */
export default function ExternalLink({ children, className = "", ...rest }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1 ${className}`} {...rest}>
      <span className="link">{children}</span>
      <svg
        viewBox="0 0 16 16"
        className="size-3 opacity-60 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
    </a>
  );
}
