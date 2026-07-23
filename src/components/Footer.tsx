import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { PROFILE } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)] opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-ink-950 text-sm font-bold">
              SK
            </span>
            <span className="font-display text-lg font-bold text-white">
              Sonu Kumar
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass glass-hover text-slate-300 hover:text-cyan-400"
            >
              <Mail size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass glass-hover text-slate-300 hover:text-cyan-400"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass glass-hover text-slate-300 hover:text-cyan-400"
            >
              <Github size={18} />
            </a>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to top <ArrowUp size={16} />
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {year} Sonu Kumar. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed &amp; built with passion · Data · AI · ML
          </p>
        </div>
      </div>
    </footer>
  );
}
