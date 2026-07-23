import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-2"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-ink-950 text-sm font-bold">
            SK
          </span>
          <span className="hidden sm:inline">
            Sonu<span className="text-cyan-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg glass text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1 bg-ink-900/95 backdrop-blur-xl border-b border-white/[0.06]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
