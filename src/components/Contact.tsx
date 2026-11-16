import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile, site } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const secondary = [
    { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin },
    { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
  ];

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-elevated px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Have an ML problem, a product idea, or a collaboration in mind? Reach out and let&apos;s talk.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {profile.email}
                </a>
                {secondary.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <p className="mx-auto max-w-6xl px-4 text-center font-mono text-xs text-subtle sm:px-6">{site.footer}</p>
      </footer>
    </>
  );
}
