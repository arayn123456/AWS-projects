import { navLinks, profile } from "../data";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.tags.join(" · ")}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            AWS, Linux, Docker, Kubernetes, Terraform, and CI/CD — practiced through labs and cloud projects.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted transition hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}</p>
        <p className="font-mono text-xs">Built with React · Ready for Vercel</p>
      </div>
    </footer>
  );
}
