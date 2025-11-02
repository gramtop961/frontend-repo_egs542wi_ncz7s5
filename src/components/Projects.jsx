import React from 'react';
import { ExternalLink, Github, Brain, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Medical Image Segmentation',
    icon: Brain,
    description:
      'U-Net and Vision Transformers for multi-class tumor segmentation with mixed precision training and advanced augmentations.',
    tags: ['PyTorch', 'MONAI', 'ViT', 'DICOM', 'Dice + IoU'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Real-time Object Detection',
    icon: Cpu,
    description:
      'YOLOv8 deployment pipeline from training to ONNX/TensorRT export with streaming inference and tracking.',
    tags: ['Ultralytics', 'TensorRT', 'ONNX', 'FastAPI', 'WebRTC'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'LLM-driven Retrieval QA',
    icon: Brain,
    description:
      'RAG system with embeddings, vector search, and prompt orchestration. Evaluated with groundedness and faithfulness.',
    tags: ['LangChain', 'OpenAI', 'FAISS', 'Guardrails', 'Eval'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Time-series Forecasting',
    icon: Cpu,
    description:
      'Temporal Fusion Transformers for multivariate forecasting, feature engineering, and model monitoring in production.',
    tags: ['PyTorch', 'TFT', 'MLflow', 'Airflow', 'Docker'],
    repo: 'https://github.com/',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black text-white py-24">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-3 text-white/70">
            Production-ready AI solutions with a focus on measurable impact, reproducibility, and scalability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map(({ title, icon: Icon, description, tags, repo, demo }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/10 p-2"><Icon size={20} /></div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex items-center gap-2 opacity-80">
                  <a href={repo} target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
                  <a href={demo} target="_blank" rel="noreferrer" className="hover:text-white"><ExternalLink size={18} /></a>
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70 min-h-[60px]">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
