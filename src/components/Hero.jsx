import { pipeline, profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="px-5 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="hero-rise font-mono text-xs tracking-[0.22em] text-accent uppercase">
            {profile.name}
          </p>
          <h1
            className="hero-rise mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "70ms" }}
          >
            {profile.headline}
          </h1>
          <p
            className="hero-rise mt-4 font-mono text-sm text-copper"
            style={{ animationDelay: "120ms" }}
          >
            {profile.tags.join(" · ")}
          </p>
          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "180ms" }}
          >
            {profile.subheading}
          </p>
          <div
            className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 4v11M7 11l5 5 5-5M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hero-rise" style={{ animationDelay: "160ms" }}>
          <div className="rounded-3xl border border-line bg-card p-4 shadow-[0_24px_60px_rgba(7,16,22,0.08)] backdrop-blur-md sm:p-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-copper" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              </div>
              <p className="font-mono text-[11px] tracking-wide text-muted">pipeline.yml</p>
            </div>

            <ol className="relative mt-5 grid grid-cols-5 gap-1">
              <span className="pointer-events-none absolute top-4 right-[10%] left-[10%] hidden h-px bg-line sm:block" />
              <span className="flow-dot pointer-events-none absolute top-[13px] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] sm:block" />
              {pipeline.map((step) => (
                <li key={step.label} className="relative text-center">
                  <span className="mx-auto grid h-9 w-9 place-items-center rounded-xl border border-line bg-canvas text-accent">
                    <step.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="mt-2 block font-mono text-[10px] text-muted sm:text-xs">{step.label}</span>
                </li>
              ))}
            </ol>

            <pre className="mt-5 overflow-hidden rounded-2xl bg-[#101820] p-4 font-mono text-[12px] leading-6 text-[#d5e2ea]">
              <code>
                <span className="text-[#7d93a1]">$</span> terraform plan{"\n"}
                <span className="text-[#5ee0d4]">+</span> aws_s3_bucket.site{"\n"}
                <span className="text-[#5ee0d4]">+</span> aws_cloudfront_distribution.cdn{"\n"}
                <span className="text-[#7d93a1]">$</span> kubectl get pods{"\n"}
                web-7d9f8c <span className="text-[#8fd18a]">Running</span>
                <span className="caret text-accent"> ▍</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
