import { Button, Container, Eyebrow } from "@/components/ui";
import { GenuCharacter } from "@/components/genu/GenuCharacter";
import { SIGNIN_URL, SIGNUP_URL } from "@/lib/fixtures";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_0%,var(--color-indigo-tint)_0%,transparent_65%)]"
      />
      <Container className="relative flex flex-col items-center text-center">
        <GenuCharacter state="base" size={140} motion="ready" label="" />
        <Eyebrow>Build → deploy → operate → improve</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Put your first AI employee to work.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-muted">
          Give it a role, ground it in your knowledge, connect a channel, and
          start the workflow. You stay in control the whole way.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={SIGNUP_URL} className="px-6 py-3 text-base">
            Build your AI employee
          </Button>
          <Button href={SIGNIN_URL} variant="secondary" className="px-6 py-3 text-base">
            Sign in
          </Button>
        </div>
      </Container>
    </section>
  );
}
