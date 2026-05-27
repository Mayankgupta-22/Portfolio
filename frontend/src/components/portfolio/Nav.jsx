import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Mayank Gupta<span className="text-muted-foreground">.</span>
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
