# Commands

- Build: `pnpm build`
- Dev server: `pnpm dev` (port 3000)
- Run all tests: `pnpm test`
- Run single test: `pnpm test <path/to/test>`
- Run tests by pattern: `pnpm test -t <pattern>`
- Run linter: `pnpm lint`
- Run formatter: `pnpm format`

# Code Style

- Routing: `export const Route = createFileRoute('/')({ component: Component })`
- Imports: Named imports only, `@/*` alias for src/, no semicolons
- Types: TypeScript strict mode, infer types implicitly
- Naming: PascalCase components, camelCase vars/functions
- Styling: Tailwind className only, double quotes for attrs
- MDX: Place in src/content/posts/\*.mdx with YAML frontmatter
- Errors: Use `notFound()` from @tanstack/react-router for 404s
- Format: 2-space indent, no production comments
