import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#1a3a2a",
    accent: "#4f6b49",
    languages: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#2a1a0a",
    accent: "#c8913a",
    languages: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#0a1a2a",
    accent: "#3a6b8a",
    languages: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#1a0a2a",
    accent: "#6a4a8a",
    languages: ["Python", "Pandas", "Streamlit"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
  {
    id: 5,
    title: "Lorem Ipsum ",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#2a1a1a",
    accent: "#8a4a4a",
    languages: ["React Native", "Firebase"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    color: "#1a2a1a",
    accent: "#8fa888",
    languages: ["React", "Three.js", "Tailwind CSS"],
    github: "https://github.com/ClaveAP",
    demo: null,
  },
];

function LangBadge({ lang }) {
  return (
    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink-800 border border-ink-700 text-ink-500">
      {lang}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-ink-800 border border-ink-700 rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/50"
      style={{ height: "360px" }}
    >
      {/* Image / Cover */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color} 0%, ${project.accent}33 100%)`,
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {/* Abstract pattern placeholder */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="opacity-20"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke={project.accent}
                strokeWidth="1"
              />
              <circle
                cx="60"
                cy="60"
                r="35"
                fill="none"
                stroke={project.accent}
                strokeWidth="0.5"
              />
              <circle
                cx="60"
                cy="60"
                r="20"
                fill="none"
                stroke={project.accent}
                strokeWidth="0.5"
              />
              <line
                x1="10"
                y1="60"
                x2="110"
                y2="60"
                stroke={project.accent}
                strokeWidth="0.5"
              />
              <line
                x1="60"
                y1="10"
                x2="60"
                y2="110"
                stroke={project.accent}
                strokeWidth="0.5"
              />
            </svg>
          </div>
        )}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <div className="flex gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-full bg-cream-100 flex items-center justify-center text-ink-900 hover:bg-cream-50 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 bg-ink-800">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-cream-100 leading-snug">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 w-8 h-8 rounded-lg bg-ink-700 border border-ink-600 flex items-center justify-center text-ink-400 hover:text-cream-100 hover:border-sage-600 transition-all duration-200"
          >
            <Github size={15} />
          </a>
        </div>

        <p className="font-body text-sm text-ink-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.languages.map((lang) => (
            <LangBadge key={lang} lang={lang} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="section-label">Work</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-50">
              Projects
            </h1>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-sage-600 to-transparent" />
            <p className="mt-6 font-body text-ink-500 max-w-md leading-relaxed">
              Kumpulan karya dan proyek yang telah saya kerjakan, dari aplikasi
              web hingga analisis data.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/ClaveAP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-ink-600 text-cream-300 font-body font-medium text-sm hover:border-sage-600 hover:text-cream-50 transition-all duration-300 hover:bg-sage-600/10"
            >
              <Github size={17} />
              Lihat lebih banyak di GitHub
            </a>
          </motion.div>
        </div>
      </section>
      <div className="border-t border-ink-800 py-8 text-center">
        <p className="font-mono text-xs text-ink-600 tracking-wider">
          Want to collaborate? Check out my{" "}
          <a
            href="https://github.com/ClaveAP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-100 underline hover:text-cream-50 transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </PageWrapper>
  );
}
