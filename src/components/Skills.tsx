import {
  Brain,
  Layers,
  Code2,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/data';

const ICONS: Record<string, LucideIcon> = {
  Brain,
  Layers,
  Code2,
  BarChart3,
};

const accentMap: Record<string, { ring: string; chip: string; glow: string }> =
  {
    cyan: {
      ring: 'from-cyan-400/20 to-cyan-500/5',
      chip: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]',
    },
    violet: {
      ring: 'from-violet-400/20 to-violet-600/5',
      chip: 'bg-violet-400/10 text-violet-300 border-violet-400/20 hover:bg-violet-400/20',
      glow: 'group-hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]',
    },
  };

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-cyan-400 font-mono text-sm mb-3">02 / Skills</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A toolkit honed across AI research, model deployment, and
            full-stack application development.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? Code2;
            const a = accentMap[cat.accent];
            return (
              <div
                key={cat.title}
                className={`reveal group glass glass-hover rounded-2xl p-7 ${a.glow}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${a.ring} border border-white/10`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${a.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
