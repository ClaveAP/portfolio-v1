import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SocialIcons from "../components/SocialIcons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
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
            <p className="section-label">About Me</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-50">
              Trias Aldi
            </h1>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-sage-600 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Photo */}
            <motion.div {...fadeUp(0.1)} className="relative">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-ink-800 border border-ink-700">
                {/* Placeholder foto — ganti src dengan foto Anda */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink-800 to-ink-700">
                  <div className="w-24 h-24 rounded-full bg-ink-600 border-2 border-ink-500 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-ink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="font-mono text-xs text-ink-600 tracking-wider">
                    Who I Am ?
                  </p>

                  <img
                    src="/foto-trias.jpg"
                    alt="Trias Aldi Prasetia"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-sage-600/40 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-amber-warm/30 rounded-bl-xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 md:-right-8 bg-ink-800 border border-ink-700 rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="font-mono text-xs text-sage-400 tracking-wider mb-0.5">
                  BASED IN
                </p>
                <p className="font-display text-sm font-semibold text-cream-100">
                  Bogor, Indonesia
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Bio */}
            <div className="flex flex-col gap-10">
              {/* Introduction */}
              <motion.div {...fadeUp(0.15)}>
                <p className="section-label">Introduction</p>
                <div className="space-y-4 font-body text-cream-300 leading-relaxed text-base">
                  <p>
                    Halo! Saya{" "}
                    <span className="text-cream-50 font-medium">
                      Trias Aldi Prasetia
                    </span>
                    , mahasiswa Teknik Industri di{" "}
                    <span className="text-sage-400">IPB University</span>. Saya
                    memiliki minat yang kuat di bidang pengembangan organisasi,
                    manajemen sumber daya manusia, dan teknologi.
                  </p>
                  <p>
                    Sebagai bagian dari{" "}
                    <span className="text-cream-200 italic">
                      Do Well Do Good Future Leaders
                    </span>{" "}
                    dan
                    <span className="text-cream-200 italic">
                      {" "}
                      Google Developers Group on Campus IPB
                    </span>
                    , saya aktif berkontribusi dalam ekosistem inovasi kampus
                    dan pengembangan komunitas teknologi.
                  </p>
                  <p>
                    Saya percaya bahwa kolaborasi, kreativitas, dan keberanian
                    untuk mencoba hal baru adalah kunci untuk terus berkembang
                    dan memberikan dampak positif bagi sekitar.
                  </p>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-ink-700 to-transparent origin-left"
              />

              {/* Favorite Club */}
              <motion.div {...fadeUp(0.25)}>
                <p className="section-label">Favorite Club</p>
                <div className="flex items-center gap-5 p-5 rounded-xl bg-ink-800/70 border border-ink-700 hover:border-ink-600 transition-colors">
                  {/* Manchester United Badge Placeholder */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-900 to-red-950 border border-red-800/50 flex items-center justify-center shrink-0">
                    <span className="text-2xl">⚽</span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-cream-100">
                      Manchester United
                    </p>
                    <p className="font-body text-sm text-ink-500 mt-0.5">
                      English Premier League · "Glory Glory Man United"
                    </p>
                    <div className="flex gap-1 mt-2">
                      {["Red Devil", "Theatre of Dreams", "Old Trafford"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2 py-0.5 rounded bg-red-900/30 border border-red-900/50 text-red-400"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div {...fadeUp(0.3)}>
                <p className="section-label mb-4">Connect With Me</p>
                <SocialIcons direction="row" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
