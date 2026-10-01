import { about } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading index="01 — Profile" title="About Me" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <Reveal delay={80}>
            <div className="rounded-3xl border border-line bg-card p-6 backdrop-blur-md sm:p-8">
              <p className="text-lg leading-relaxed text-ink sm:text-xl">{about.lead}</p>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{about.focus}</p>
            </div>
          </Reveal>
          <div className="grid gap-3">
            {about.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={120 + index * 70}>
                <article className="rounded-2xl border border-line bg-card p-5 backdrop-blur-md">
                  <h3 className="text-base font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
