import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col justify-center py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#3b82b6]">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#171923] md:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link to="/" className="mt-8 w-fit text-lg text-[#3b82b6] hover:text-[#2c668f]">
        Back home
      </Link>
    </main>
  );
}
