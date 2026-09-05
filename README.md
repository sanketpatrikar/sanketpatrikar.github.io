# Personal site

This is my personal site, where I share a little about me, my work, and things I write.

Built with React, TanStack Start, and MDX.

## Development

Use Node.js 24 and the pnpm version pinned in `package.json`.
Run `pnpm install --frozen-lockfile`, then `pnpm dev`.

Run `pnpm check` before submitting changes. It checks types, lint, tests,
the production build, and generated routes/assets. CI runs the same command
for pull requests and pushes to main. `pnpm test` runs unit tests separately.
