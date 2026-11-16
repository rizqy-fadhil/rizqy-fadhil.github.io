"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin },
    { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
    { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="order-2 md:order-1">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 px-3 py-1 font-mono text-xs text-muted"
          >
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {profile.location}
          </motion.p>

          <motion.h1 {...fade(0.05)} className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </motion.h1>

          <motion.p {...fade(0.1)} className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {profile.role}
          </motion.p>
          <motion.p {...fade(0.12)} className="mt-1 font-mono text-sm text-subtle">
            {profile.subtitle}
          </motion.p>

          <motion.p {...fade(0.18)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              Explore Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.ul {...fade(0.3)} className="mt-8 flex items-center gap-2" aria-label="Social links">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="order-1 mx-auto md:order-2"
        >
          <div className="relative size-48 sm:size-64 lg:size-72">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent/60 via-accent/10 to-transparent opacity-70 blur-md" />
            <div className="relative size-full overflow-hidden rounded-[2rem] border border-border-strong bg-elevated">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 192px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
