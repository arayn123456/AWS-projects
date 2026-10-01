import { experience } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="04 — Practice"
            title="Experience"
            text="Learning through labs and projects, before a full-time DevOps role."
          />
        </Reveal>
        <ol className="mt-10 grid gap-4">
          {experience.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 70}
              className="grid gap-4 rounded-3xl border border-line bg-card p-6 backdrop-blur-md sm:grid-cols-[auto_1fr] sm:p-7"
            >
              <span className="font-mono text-sm text-accent">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
