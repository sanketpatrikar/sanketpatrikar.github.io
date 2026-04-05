import { createFileRoute } from "@tanstack/react-router"

const featuredWork = [
  {
    href: "/resume",
    meta: "Career snapshot · Experience and impact",
    title: "Resume",
  },
  {
    href: "/posts",
    meta: "Writing archive · Engineering notes",
    title: "Posts",
  },
  {
    href: "https://github.com/sanketpatrikar",
    meta: "Open source · Side projects",
    title: "GitHub",
  },
]

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 py-14 md:py-20">
      <section className="grid gap-8 border-b border-[var(--border)] pb-12 md:grid-cols-[220px,1fr] md:gap-12">
        <img
          src="/pfp-circle.png"
          alt="Sanket Patrikar"
          className="h-36 w-36 rounded-full border border-[var(--border)] object-cover md:h-44 md:w-44"
        />

        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Sanket Patrikar
            </h1>
            <p className="text-xl text-muted md:text-2xl">Software Engineer</p>
          </div>

          <p className="max-w-2xl text-base text-muted md:text-lg">
            I build clean interfaces, modernize legacy stacks, and ship products that
            feel fast. Most recently I led migrations across React, Vite, Node, and
            routing infrastructure while improving developer experience and runtime
            performance.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.2em] text-muted">
            <a className="site-link" href="mailto:sanketspatrikar@gmail.com">
              Email
            </a>
            <a className="site-link" href="https://x.com/patrikarsanket">
              X
            </a>
            <a className="site-link" href="https://github.com/sanketpatrikar">
              GitHub
            </a>
            <a className="site-link" href="https://linkedin.com/in/sanketpatrikar">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-sm uppercase tracking-[0.3em] text-muted">Selected</h2>
        <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {featuredWork.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group grid gap-2 py-5 transition-colors hover:bg-black/3 md:grid-cols-[1fr,auto] md:items-end"
            >
              <div>
                <h3 className="font-display text-3xl tracking-[-0.02em]">{item.title}</h3>
                <p className="text-sm text-muted md:text-base">{item.meta}</p>
              </div>
              <span className="text-sm uppercase tracking-[0.18em] text-muted transition group-hover:text-[var(--ink)]">
                View
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
