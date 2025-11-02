import React from 'react';
import { Cpu, Database, Cloud, Brain, Award } from 'lucide-react';

const categories = [
  {
    title: 'Modeling',
    icon: Brain,
    items: ['PyTorch', 'TensorFlow/Keras', 'Transformers', 'Diffusion', 'CNN/RNN/Attention', 'XGBoost/LightGBM'],
  },
  {
    title: 'Data & MLOps',
    icon: Database,
    items: ['Pandas/Polars', 'Spark', 'Airflow', 'MLflow', 'Weights & Biases', 'Great Expectations'],
  },
  {
    title: 'Deployment',
    icon: Cloud,
    items: ['FastAPI', 'Docker', 'Kubernetes', 'gRPC', 'TensorRT/ONNX', 'AWS/GCP/Azure'],
  },
  {
    title: 'Systems',
    icon: Cpu,
    items: ['Python', 'C++', 'CUDA basics', 'REST', 'Linux', 'GitHub Actions'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white py-24">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tooling</h2>
          <p className="mt-3 text-white/70">
            Practical expertise across the ML lifecycle — from experimentation to reliable production systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2"><Icon size={20} /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {items.map((item) => (
                  <li key={item} className="text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6 flex items-start gap-3">
          <Award className="text-emerald-300" size={20} />
          <p className="text-emerald-100/90 text-sm">
            I value clarity, reproducibility, and impact. My work emphasizes robust experimentation, strong evaluation, and scalable deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
