import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col justify-center px-6 py-16 sm:px-10 md:min-h-screen md:mx-0 md:px-12 lg:px-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl tracking-[-0.04em] text-[var(--heading)] md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link to="/" className="mt-8 w-fit text-lg text-accent hover:text-[var(--accent-strong)]">
        Back home
      </Link>
    </main>
  );
}
