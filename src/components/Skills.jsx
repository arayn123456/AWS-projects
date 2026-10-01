import { skills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02 — Toolkit"
            title="Skills"
            text="The tools I practice while learning how software gets built, shipped, and kept running."
          />
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal
              as="li"
              key={skill.name}
              delay={index * 40}
              className="flex h-full items-center gap-3 rounded-2xl border border-line bg-card px-4 py-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"
                style={skill.brand ? { color: skill.brand } : undefined}
              >
                <skill.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-ink">{skill.name}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
