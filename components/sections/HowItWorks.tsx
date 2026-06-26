"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/config/site.config";
import { cn } from "@/lib/utils";

const appScreens = [
  {
    src: "/images/app-screen-1.jpg",
    alt: "BaiHub app, choose your service",
    step: siteConfig.steps[0],
  },
  {
    src: "/images/app-screen-2.png",
    alt: "BaiHub app, get matched with verified helpers",
    step: siteConfig.steps[1],
    featured: true,
  },
  {
    src: "/images/app-screen-3.png",
    alt: "BaiHub app, book and pay securely",
    step: siteConfig.steps[2],
  },
];

const phoneVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    scale: 0.92,
    rotateY: i === 0 ? 8 : i === 2 ? -8 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
  },
};

const labelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="how-it-works" className="section-padding overflow-hidden bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Book trusted help in 3 simple steps
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Three simple steps to trusted help at home.
          </p>
        </motion.div>

        {/* Phone mockups */}
        <div className="mt-16 flex items-end justify-center gap-4 sm:gap-6 lg:gap-10">
          {appScreens.map((screen, index) => (
            <div
              key={screen.step.number}
              className={cn(
                "flex flex-col items-center",
                screen.featured ? "z-10" : "z-0"
              )}
            >
              {/* Phone frame */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={phoneVariants}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }
                }
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -8, transition: { duration: 0.3 } }
                }
                className={cn(
                  "relative cursor-default overflow-hidden rounded-[2rem] shadow-2xl transition-shadow duration-300",
                  screen.featured
                    ? "w-[180px] shadow-black/15 sm:w-[220px] lg:w-[260px]"
                    : "w-[150px] shadow-black/10 sm:w-[180px] lg:w-[210px]",
                  screen.featured ? "" : "mb-8"
                )}
              >
                {/* Thin top accent line */}
                <div
                  className={cn(
                    "h-1",
                    screen.featured ? "bg-brand-primary" : "bg-border"
                  )}
                />

                {/* Screenshot */}
                <div className="relative w-full aspect-[9/18] bg-white">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 260px"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              {/* Step label below the phone */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={labelVariants}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: 0.3 + index * 0.15 }
                }
                className="mt-6 max-w-[180px] text-center sm:max-w-[220px]"
              >
                <div
                  className={cn(
                    "mx-auto mb-2 flex size-8 items-center justify-center rounded-full text-sm font-bold",
                    screen.featured
                      ? "bg-brand-primary text-black"
                      : "bg-brand-surface text-brand-foreground"
                  )}
                >
                  {screen.step.number}
                </div>
                <p className="text-sm font-semibold text-brand-foreground sm:text-base">
                  {screen.step.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-muted sm:text-sm">
                  {screen.step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
