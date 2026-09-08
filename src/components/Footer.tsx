export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <div className="font-display text-xl">The Ascent Collaborative</div>
          <p className="mt-2 text-sm text-muted">150 Paularino Ave, Suite D-170<br />Costa Mesa, CA 92626</p>
        </div>
        <div className="text-sm text-muted">
          <a href="tel:9497815769" className="block hover:text-copper">949-781-5769</a>
          <a href="https://theascentcollab.com/" className="mt-1 block hover:text-copper">theascentcollab.com</a>
          <p className="mt-4 text-xs">Speculative redesign by Novenworks. Not an official Ascent site.</p>
        </div>
      </div>
    </footer>
  );
}
