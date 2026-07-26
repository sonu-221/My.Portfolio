import { useState, useMemo } from 'react';
import { Award, Calendar, BadgeCheck, type LucideIcon } from 'lucide-react';
import { CERTIFICATES, type Certificate } from '@/lib/data';

type FilterKey = 'All' | Certificate['category'];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'Claude AI', label: 'Claude AI' },
  { key: 'Data Analytics', label: 'Data Analytics' },
  { key: 'Machine Learning', label: 'Machine Learning' },
  { key: 'Game Development', label: 'Game Development' },
];

const CATEGORY_ICON: Record<Certificate['category'], LucideIcon> = {
  'Claude AI': BadgeCheck,
  'Data Analytics': Award,
  'Machine Learning': Award,
  'Game Development': Award,
};

const CATEGORY_COUNT = (cat: FilterKey) =>
  cat === 'All' ? CERTIFICATES.length : CERTIFICATES.filter((c) => c.category === cat).length;

export default function Certificates() {
  const [active, setActive] = useState<FilterKey>('All');

  const visible = useMemo(
    () => (active === 'All' ? CERTIFICATES : CERTIFICATES.filter((c) => c.category === active)),
    [active],
  );

  return (
    <section id="certificates" className="section-padding relative">
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-cyan-400 font-mono text-sm mb-3">04 / Certificates</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            20+ certifications across Claude AI, data analytics, machine learning,
            and game development — a commitment to continuous, hands-on learning.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400/15 border-cyan-400/40 text-cyan-300'
                    : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {f.label}
                <span className={`ml-2 text-xs ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                  {CATEGORY_COUNT(f.key)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((cert, i) => {
            const Icon = CATEGORY_ICON[cert.category];
            const isClaude = cert.category === 'Claude AI';
            const accentText = isClaude ? 'text-cyan-400' : 'text-violet-400';
            const ring = isClaude
              ? 'from-cyan-400/20 to-cyan-500/5'
              : 'from-violet-400/20 to-violet-600/5';
            return (
              <article
                key={cert.id}
                className="reveal group glass glass-hover rounded-2xl p-5 flex items-start gap-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div
                  className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${ring} border border-white/10`}
                >
                  <Icon size={20} className={accentText} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white text-sm leading-snug group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${accentText}`}>
                    {cert.issuer}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar size={12} /> {cert.date}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
