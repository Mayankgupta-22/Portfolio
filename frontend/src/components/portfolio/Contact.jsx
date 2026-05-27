import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// lucide-react dropped its brand icons, so the social marks are inline SVGs.
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const socials = [
  { label: "officiamayankgupta22@gmail.com", href: "mailto:officiamayankgupta22@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/Mayankgupta-22", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-gupta-858971282/", Icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Card className="relative items-center overflow-hidden px-6 py-16 text-center sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
        />
        <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="relative mt-4 max-w-xl text-muted-foreground">
          Open to full-time roles, freelance projects, and interesting
          collaborations.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <Button
              key={label}
              asChild
              variant="outline"
              className="rounded-full"
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon className="size-4" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </Card>
    </section>
  );
}
