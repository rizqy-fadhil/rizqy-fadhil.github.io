import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import { certifications, isPlaceholder, skillGroups } from "@/data/portfolio";
import { SkillIcon } from "@/lib/icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I build with">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 2) * 0.06}
            className={`rounded-2xl border border-border bg-elevated p-6 ${i === skillGroups.length - 1 && skillGroups.length % 2 ? "md:col-span-2" : ""}`}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-1.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <SkillIcon name={skill} className="size-4 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 id="certifications" className="text-xl font-semibold tracking-tight">
          Certifications
        </h3>
      </Reveal>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal
            as="li"
            key={cert.name}
            delay={Math.min(i, 3) * 0.05}
            className="flex items-start gap-4 rounded-2xl border border-border bg-elevated p-5 transition-colors hover:border-border-strong"
          >
            <div className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-white">
              {cert.issuer === "AWS" ? (
                <FaAws className="size-6 text-[#232f3e]" aria-hidden="true" />
              ) : (
                <Image src="/images/logos/dicoding.jpg" alt="" width={44} height={44} />
              )}
            </div>
            <div className="min-w-0">
              <p className="font-medium leading-snug">{cert.name}</p>
              <p className="mt-1 text-xs text-subtle">
                {cert.issuer === "AWS" ? "Amazon Web Services" : "Dicoding Indonesia"}
                {cert.issued && ` · Issued ${cert.issued}`}
              </p>
              {!isPlaceholder(cert.credentialUrl) && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Show credential
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">for {cert.name}</span>
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
