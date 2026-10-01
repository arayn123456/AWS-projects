import { certifications } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="05 — Learning"
            title="Certifications"
            text="Study paths in progress. These are learning journeys, not issued vendor certificates."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 backdrop-blur-md sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] tracking-wide text-accent uppercase">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
