import {
  HardHat,
  Video,
  CloudSun,
  Apple,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { PROJECTS, type Project } from '@/lib/data';

const ICONS: Record<string, LucideIcon> = {
  HardHat,
  Video,
  CloudSun,
  Apple,
  ShieldCheck,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = ICONS[project.icon] ?? HardHat;
  const isCyan = project.accent === 'cyan';
  const accentRing = isCyan
    ? 'from-cyan-400/25 to-cyan-500/5'
    : 'from-violet-400/25 to-violet-600/5';
  const accentText = isCyan ? 'text-cyan-400' : 'text-violet-400';
  const accentBorder = isCyan ? 'group-hover:border-cyan-400/40' : 'group-hover:border-violet-400/40';
  const tagStyle = isCyan
    ? 'bg-cyan-400/10 text-cyan-300 border-cyan-400/15'
    : 'bg-violet-400/10 text-violet-300 border-violet-400/15';
  const glow = isCyan
    ? 'group-hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]'
    : 'group-hover:shadow-[0_0_50px_rgba(167,139,250,0.12)]';

  return (
    <article
      className={`reveal group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 ${accentBorder} ${glow}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accentRing} border border-white/10`}
        >
          <Icon size={26} className={accentText} />
        </div>
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 ${accentText}`}
        >
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-white leading-snug">
        {project.title}
      </h3>
      <p className={`mt-1.5 text-sm font-medium ${accentText}`}>
        {project.tagline}
      </p>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-current ${accentText}`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border ${tagStyle}`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
        <span>View details</span>
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-cyan-400 font-mono text-sm mb-3">03 / Projects</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Featured <span className="gradient-text-violet">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              End-to-end AI applications spanning computer vision, NLP,
              time-series forecasting, and cybersecurity.
            </p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
