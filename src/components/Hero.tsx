import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Sparkles,
} from 'lucide-react';

import { PROFILE } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-glow" />

      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px] animate-glow [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left content */}
        <div className="lg:col-span-7">
          {/* Welcome badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-7 animate-fade-in">
            <Sparkles size={14} className="text-cyan-400" />

            <span className="text-xs font-medium tracking-wide text-slate-300">
              Welcome
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-heading animate-fade-up">
            <span className="block hero-intro">
              Hi, I&apos;m
            </span>

            <span className="block hero-name gradient-text text-shadow-glow">
              Sonu Kumar
            </span>
          </h1>

          {/* Professional title */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-medium animate-fade-up [animation-delay:120ms] opacity-0">
            {PROFILE.title}
          </p>

          {/* Tagline */}
          <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed animate-fade-up [animation-delay:240ms] opacity-0">
            {PROFILE.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up [animation-delay:360ms] opacity-0">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href={PROFILE.resumeUrl}
              download
              className="btn-ghost"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a href="#contact" className="btn-ghost">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          {/* Contact information */}
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:480ms] opacity-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2"
            >
              <Mail size={16} />
              {PROFILE.email}
            </a>

            <span className="hidden sm:block h-4 w-px bg-white/10" />

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right animated avatar */}
        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <div className="relative perspective">
            {/* Avatar glow */}
            <div className="absolute inset-0 rounded-full animate-border-flow bg-gradient-to-br from-cyan-400/40 to-violet-600/40 blur-2xl" />

            {/* Avatar border */}
            <div className="relative h-72 w-72 lg:h-80 lg:w-80 rounded-full animate-border-flow bg-gradient-to-br from-cyan-400 via-ink-800 to-violet-600 p-[3px] animate-float">
              <div className="h-full w-full rounded-full bg-ink-900 overflow-hidden">
                <img
                  src="/image.png"
                  alt="Sonu Kumar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-5 -right-8 glass rounded-xl px-4 py-2 text-sm font-medium text-cyan-300 animate-float">
              Web Developer
            </div>

            <div className="absolute bottom-4 -left-12 glass rounded-xl px-4 py-2 text-sm font-medium text-violet-300 animate-float [animation-delay:1s]">
              Data Analyst
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div className="h-9 w-5 rounded-full border border-white/15 flex justify-center pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-cyan-400 animate-float" />
        </div>
      </div>
    </section>
  );
}