type IconProps = {
  className?: string;
};

export function CheeseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 19.5 12.5 3l9.5 16.5a1 1 0 0 1-.87 1.5H2.87A1 1 0 0 1 2 19.5Z" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChocolateIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M9 6v12M15 6v12M3 12h18" />
    </svg>
  );
}
