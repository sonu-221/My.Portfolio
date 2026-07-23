import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const TIMELINE = [
  {
    icon: GraduationCap,
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Centurion University of Technology and Management',
    period: '2023 – Present',
    desc: 'Building a strong foundation in data structures, algorithms, databases, machine learning, deep learning, and generative AI.',
    accent: 'cyan',
  },
  {
    icon: Award,
    title: 'Data Structures & Algorithms (DSA)',
    org: 'GeeksforGeeks · 16-Week Training Program',
    period: 'Certification',
    desc: 'Rigorous training in core DSA concepts, problem-solving patterns, and competitive programming fundamentals.',
    accent: 'violet',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-cyan-400 font-mono text-sm mb-3">
            04 / Education
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Certifications &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {TIMELINE.map((item, i) => {
            const isCyan = item.accent === 'cyan';
            const accentText = isCyan ? 'text-cyan-400' : 'text-violet-400';
            const ring = isCyan
              ? 'from-cyan-400/20 to-cyan-500/5'
              : 'from-violet-400/20 to-violet-600/5';
            return (
              <div
                key={item.title}
                className="reveal group glass glass-hover rounded-2xl p-8 relative overflow-hidden"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${ring} border border-white/10`}
                  >
                    <item.icon size={26} className={accentText} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-mono ${accentText}`}
                      >
                        <Calendar size={12} /> {item.period}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className={`mt-1 text-sm font-medium ${accentText}`}>
                      {item.org}
                    </p>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <BookOpen
                  size={120}
                  className="absolute -bottom-6 -right-6 text-white/[0.02] rotate-12"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
