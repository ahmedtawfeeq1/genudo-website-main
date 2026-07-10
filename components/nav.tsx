import { Button, Container } from "./ui";
import { SIGNIN_URL, SIGNUP_URL } from "@/lib/fixtures";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#product", label: "Product" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center" aria-label="GenuDo home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/genudo-logo.svg" alt="GenuDo" className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SIGNIN_URL}
            className="hidden px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Sign in
          </a>
          <Button href={SIGNUP_URL}>Build your AI employee</Button>
        </div>
      </Container>
    </header>
  );
}
