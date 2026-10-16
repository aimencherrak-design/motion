// Monogramme « A » géométrique : deux jambages blancs et une barre dorée inclinée.
export function Monogramme({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 7h16l19 50H46.5l-4.2-11.5H21.7L17.5 57H5zM25.6 36h12.8L32 18.5z"
      />
      <path fill="var(--color-or)" d="M15 39.5h47l-4.6 6.5H10.5z" />
    </svg>
  );
}
