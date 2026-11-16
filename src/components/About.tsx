import { Brain, Layers, Users } from "lucide-react";
import { pillars, profile, type PillarIcon } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const icons: Record<PillarIcon, typeof Brain> = { brain: Brain, layers: Layers, users: Users };

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer who ships, from model to product">
      <Reveal className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {profile.about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = icons[pillar.icon];
          return (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              as="article"
              className="group rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-accent/50"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
