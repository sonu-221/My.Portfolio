import { GraduationCap, Cpu, Brain, Database } from 'lucide-react';

const PILLARS = [
  {
    icon: Database,
    title: 'Data Structures & Algorithms',
    desc: 'Strong problem-solving foundation for efficient, scalable code.',
  },
  {
    icon: Cpu,
    title: 'Database Management',
    desc: 'Designing and querying relational data systems with SQL & MySQL.',
  },
  {
    icon: Brain,
    title: 'ML, DL & GenAI',
    desc: 'From classical ML to deep networks and large language models.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-cyan-400 font-mono text-sm mb-3">01 / About</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            About <span className="gradient-text-violet">Me</span>
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="glass rounded-2xl p-8 md:p-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m pursuing my{' '}
                <span className="text-white font-semibold">
                  B.Tech in Computer Science and Engineering
                </span>{' '}
                at{' '}
                <span className="text-cyan-400 font-semibold">
                  Centurion University of Technology and Management
                </span>{' '}
                (2023 – Present). I&apos;m passionate about turning data into
                intelligent systems that solve real-world problems.
              </p>
              <p className="mt-5 text-slate-400 leading-relaxed">
                My foundation spans Data Structures, Algorithms, Database
                Management, Machine Learning, Deep Learning, and Generative AI —
                with hands-on experience building end-to-end AI applications
                from model training to deployment.
              </p>

              <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-600/20 text-cyan-400">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    B.Tech · CSE
                  </p>
                  <p className="text-xs text-slate-400">
                    Centurion University · 2023 – Present
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal glass glass-hover rounded-2xl p-6 flex gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-600/15 text-cyan-400">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
