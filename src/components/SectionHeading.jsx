export default function SectionHeading({ index, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
        {index}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{text}</p> : null}
    </div>
  );
}
