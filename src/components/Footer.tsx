export function Footer() {
  return (
    <footer className="site-foot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sf-logo" src="/sotech-logo.png" alt="SoTech" />
      <div className="sf-icons">
        <a href="https://instagram.com/socialtechnologies.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24">
            <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="mailto:abbas@thesocialtech.net" aria-label="Email">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m3.5 7 8.5 6 8.5-6" />
          </svg>
        </a>
        <a href="https://thesocialtech.net" target="_blank" rel="noopener noreferrer" aria-label="Website">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
