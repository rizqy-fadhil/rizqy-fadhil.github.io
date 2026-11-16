import { Briefcase, GraduationCap, Presentation, Trophy, Users } from "lucide-react";
import { journey, type JourneyType } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const typeMeta: Record<JourneyType, { Icon: typeof Briefcase; label: string }> = {
  work: { Icon: Briefcase, label: "Work" },
  teaching: { Icon: Presentation, label: "Teaching" },
  achievement: { Icon: Trophy, label: "Achievement" },
  organization: { Icon: Users, label: "Organization" },
  education: { Icon: GraduationCap, label: "Education" },
};

export function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="Experience, leadership & milestones">
      <ol className="relative ml-4 border-l border-border sm:ml-5">
        {journey.map((item, i) => {
          const { Icon, label } = typeMeta[item.type];
          return (
            <Reveal as="li" key={`${item.title}-${item.period}`} delay={Math.min(i, 4) * 0.04} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span
                className={`absolute -left-4 top-0 grid size-8 place-items-center rounded-full border bg-bg sm:-left-[1.125rem] sm:size-9 ${
                  item.type === "achievement" ? "border-accent text-accent" : "border-border-strong text-muted"
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </span>
              <div className="rounded-2xl border border-border bg-elevated p-5 transition-colors hover:border-border-strong">
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.org}</p>
                {item.description && <p className="mt-2 text-sm text-subtle">{item.description}</p>}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
