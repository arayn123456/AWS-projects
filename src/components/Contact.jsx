import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { profile } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryanmishra",
    href: profile.linkedin,
    external: true,
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: `github.com/${profile.githubHandle}`,
    href: profile.github,
    external: true,
    icon: SiGithub,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: HiOutlineMail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: HiOutlinePhone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="06 — Hello"
            title="Contact"
            text="Open to junior DevOps roles, cloud projects, and conversations about infrastructure."
          />
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <Reveal as="li" key={channel.label} delay={index * 60}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <channel.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    {channel.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium break-all text-ink sm:text-base">
                    {channel.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
