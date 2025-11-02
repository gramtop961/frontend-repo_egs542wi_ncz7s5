import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 xl:px-12 pt-28 pb-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
            <Rocket size={14} />
            <span>Machine Learning • Deep Learning • AI</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            Building intelligent systems that learn, reason, and scale
          </h1>
          <p className="mt-4 text-lg text-white/80">
            I’m a Machine Learning & Deep Learning Engineer specializing in end‑to‑end AI products — from data and modeling to MLOps and deployment. I craft robust models and ship them to production.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition"
            >
              View Projects
            </a>
            <a
              href="mailto:hello@ai-engineer.dev"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
