// Shared drawings used across the site with <use href="#i-..."/>.
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="pin-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFA552" />
          <stop offset="1" stopColor="#F2651A" />
        </linearGradient>
        <symbol id="i-pin" viewBox="-80 -230 160 232">
          <path d="M0 0 C -14 -36 -78 -84 -78 -146 A 78 78 0 1 1 78 -146 C 78 -84 14 -36 0 0 Z" fill="url(#pin-grad)" />
          <circle cy="-146" r="30" fill="#fff" />
        </symbol>
        <symbol id="i-folder" viewBox="0 0 32 32">
          <path d="M3 9.5A2.5 2.5 0 0 1 5.5 7h6.2l2.6 2.8h12.2A2.5 2.5 0 0 1 29 12.3v11.2a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 23.5z" fill="currentColor" opacity=".18" />
          <path d="M3 12.5A2.5 2.5 0 0 1 5.5 10h21a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 23.5z" fill="currentColor" />
          <circle cx="23" cy="15" r="2.2" fill="#F2701F" />
        </symbol>
        <symbol id="i-windows" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 5.5 10.5 4.4v7.1H3zM11.5 4.3 21 3v8.5h-9.5zM3 12.5h7.5v7.1L3 18.5zM11.5 12.5H21V21l-9.5-1.3z" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M5 12.5 10 17l9-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
      </defs>
    </svg>
  );
}

// A pin that renders inside its own box (the symbol's drawing is offset, so <use> needs an explicit size).
export function Pin({ className }) {
  return (
    <svg className={className} viewBox="0 0 160 232" aria-hidden="true">
      <use href="#i-pin" width="160" height="232" />
    </svg>
  );
}

export function Icon({ name, className, style }) {
  return (
    <svg className={className} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
