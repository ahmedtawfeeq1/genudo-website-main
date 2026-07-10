import { Container } from "./ui";
import { GenuCharacter } from "./genu/GenuCharacter";
import { SIGNIN_URL, SIGNUP_URL } from "@/lib/fixtures";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-3">
            <GenuCharacter state="base" size={40} motion="still" label="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/genudo-logo.svg" alt="GenuDo" className="h-6 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Build AI employees that communicate, take action, and move work
            forward — with humans in control.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <FooterCol
            title="Product"
            items={[
              { label: "How it works", href: "#how" },
              { label: "Capabilities", href: "#capabilities" },
              { label: "Oversight", href: "#product" },
            ]}
          />
          <FooterCol
            title="Get started"
            items={[
              { label: "Build your AI employee", href: SIGNUP_URL },
              { label: "Sign in", href: SIGNIN_URL },
            ]}
          />
          <FooterCol
            title="Company"
            items={[{ label: "app.genudo.ai", href: "https://app.genudo.ai" }]}
          />
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {2026} GenuDo. All rights reserved.</p>
          <p className="eyebrow">The quiet engine for AI work</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
