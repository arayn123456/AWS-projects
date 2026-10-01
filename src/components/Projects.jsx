import { SiGithub } from "react-icons/si";
import { projects } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03 — Work"
            title="Projects"
            text="Hands-on cloud projects that practice monitoring, event-driven automation, and static delivery."
          />
        </Reveal>
        <div className="mt-10 grid gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 60}>
              <article className="rounded-3xl border border-line bg-card p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs text-copper">0{index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-2 max-w-2xl text-muted">{project.summary}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  >
                    <SiGithub className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Architecture</p>
                  <ol className="mt-3 flex flex-wrap items-center gap-2">
                    {project.architecture.map((step, stepIndex) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-ink">
                          {step}
                        </span>
                        {stepIndex < project.architecture.length - 1 ? (
                          <span className="text-muted" aria-hidden="true">
                            →
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.architectureNote}</p>
                </div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-line bg-canvas/70 px-4 py-3 text-sm leading-relaxed text-ink">
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
