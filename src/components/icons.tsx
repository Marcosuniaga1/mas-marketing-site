import type { SVGProps } from "react";

export function InstagramIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Simplified Meta mark (infinity-style dual loop). Uses currentColor so it
// inherits the parent's text color (e.g. var(--gold)).
export function MetaIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 15.5c0 2 1.2 3.5 3 3.5 1.6 0 2.7-.9 4-3l3-5c1.3-2.1 2.4-3 4-3 1.8 0 3 1.5 3 3.5S18.8 15 17 15c-1.3 0-2.3-.6-3.4-2L8.4 7C7.3 5.6 6.3 5 5 5 3.2 5 2 6.5 2 8.5" />
    </svg>
  );
}

// Stylized Google "G" monogram (single-stroke). Uses currentColor.
export function GoogleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M21.5 12.5c0 5-3.8 8.5-9 8.5-5 0-9-4-9-9s4-9 9-9c2.4 0 4.5.9 6.1 2.4" />
      <path d="M12.5 12.5h9" />
    </svg>
  );
}
