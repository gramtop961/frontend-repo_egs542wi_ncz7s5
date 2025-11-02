import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-24">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something intelligent</h2>
          <p className="mt-3 text-white/70">
            Open to collaborations, consulting, and full‑time roles. The best way to reach me is by email or LinkedIn.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-2xl">
          <a
            href="mailto:hello@ai-engineer.dev"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-white/20 transition"
          >
            <div className="rounded-lg bg-white/10 p-2"><Mail size={18} /></div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-white/70">hello@ai-engineer.dev</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-white/20 transition"
          >
            <div className="rounded-lg bg-white/10 p-2"><Linkedin size={18} /></div>
            <div>
              <div className="font-semibold">LinkedIn</div>
              <div className="text-sm text-white/70">Connect professionally</div>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:border-white/20 transition"
          >
            <div className="rounded-lg bg-white/10 p-2"><Github size={18} /></div>
            <div>
              <div className="font-semibold">GitHub</div>
              <div className="text-sm text-white/70">Explore code and repos</div>
            </div>
          </a>
        </div>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} AI Engineer — All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
