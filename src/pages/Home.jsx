import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import ThreeViewer from "../components/ThreeViewer";
import SocialIcons from "../components/SocialIcons";
import { Briefcase, Trophy } from "lucide-react";

const experience = [
  {
    period: "Mar 2025 – Feb 2026",
    role: "Human Capital",
    org: "Do Well Do Good Future Leaders – IPB University",
  },
  {
    period: "Oct 2025 – Present",
    role: "Core Team – Human Capital",
    org: "Google Developers Group on Campus IPB University",
  },
];

const awards = [
  {
    title: "1st Place — National Competition Pelita Islami 2025",
    org: "Poltekkes Kemenkes Surakarta",
  },
  {
    title: "1st Place — National SDGS Essay Competition",
    org: "Universitas Harkat Negeri",
  },
  {
    title: "1st Place — National Essay Festival PAUD 2025",
    org: "Universitas Negeri Jakarta",
  },
  {
    title: "Awardee BSI Scholarship",
    org: "",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  return (
    <PageWrapper>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-10 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1 items-center text-center lg:items-start lg:text-left">
              {/* Social Icons */}
              <SocialIcons />

              {/* Name */}
              <div>
                <motion.p {...fadeUp(0.1)} className="section-label">
                  Portfolio
                </motion.p>
                <motion.h1
                  {...fadeUp(0.2)}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  Hi, I'm{" "}
                  <span className="text-gradient block mt-1">
                    Trias Aldi
                    <br className="hidden lg:block" /> Prasetia
                  </span>
                </motion.h1>
              </div>

              {/* Study Info */}
              <motion.div {...fadeUp(0.35)} className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-500 shrink-0" />
                  <p className="font-body text-cream-300 text-sm sm:text-base">
                    Software Engineering Technology '24 - IPB University
                  </p>
                </div>
                {/* <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-warm shrink-0" />
                  <p className="font-body text-cream-300 text-sm sm:text-base">
                    IPB University
                  </p>
                </div> */}
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px w-full bg-gradient-to-r from-sage-600 via-ink-600 to-transparent origin-left"
              />
            </div>

            {/* Right: 3D Viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-1 lg:order-2 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-sage-600/10 rounded-full blur-3xl animate-pulse" />
              <ThreeViewer />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience & Awards ── */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label text-center mb-10 sm:mb-16"
          >
            Background
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 rounded-lg bg-sage-600/20 border border-sage-600/30 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-sage-400" />
                </div>
                <h2 className="font-display text-xl font-semibold text-cream-100">
                  Experience
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {experience.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative pl-5 sm:pl-6 border-l border-ink-700 hover:border-sage-600 transition-colors duration-300"
                  >
                    <p className="font-mono text-xs text-sage-500 mb-1 tracking-wider">
                      {item.period}
                    </p>
                    <p className="font-body font-medium text-cream-100 text-sm sm:text-base leading-snug">
                      {item.role}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-ink-500 mt-0.5 leading-relaxed">
                      {item.org}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-8 h-8 rounded-lg bg-amber-warm/10 border border-amber-warm/20 flex items-center justify-center shrink-0">
                  <Trophy className="w-4 h-4 text-amber-warm" />
                </div>
                <h2 className="font-display text-xl font-semibold text-cream-100">
                  Awards
                </h2>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex gap-3 sm:gap-4 items-start"
                  >
                    <div className="mt-2 w-2 h-2 rounded-full bg-amber-warm shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-body font-medium text-cream-200 text-sm leading-snug">
                        {award.title}
                      </p>
                      {award.org && (
                        <p className="font-body text-xs text-ink-500 mt-0.5">
                          {award.org}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
