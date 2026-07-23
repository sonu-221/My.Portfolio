import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PROFILE, submitContact } from '@/lib/data';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const result = await submitContact(form);
    if (result.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setErrorMsg(result.error);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.05] transition-all';

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal">
          <p className="text-cyan-400 font-mono text-sm mb-3">05 / Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text-violet">Touch</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Have a project in mind or an opportunity to discuss? I&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-5 reveal space-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group block glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-600/15 text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {PROFILE.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group block glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-600/15 text-cyan-400">
                  <Linkedin size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    LinkedIn
                  </p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    Sonu Kumar
                  </p>
                </div>
              </div>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="group block glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-600/15 text-cyan-400">
                  <Github size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    GitHub
                  </p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    View my code
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
                  <CheckCircle2 size={18} />
                  Thanks! Your message has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  <AlertCircle size={18} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
