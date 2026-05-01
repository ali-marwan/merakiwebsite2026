export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" fill="#0E1626" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="8.5" stroke="#1A2235" />
      <path
        d="M8 22V10L12.5 16L17 10V22"
        stroke="#C19858"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22V10"
        stroke="#FAF8F4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="22" r="1.25" fill="#C19858" />
    </svg>
  );
}
