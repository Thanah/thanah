# thanahr.com

Personal site of Thanah Raveendran, software engineer.

Built with React 19, TypeScript, Tailwind CSS 4 and Vite, tested with Vitest and Testing Library, and deployed to GitHub Pages.

## Develop

Requires Node 20.19 or newer.

```sh
npm install
npm run dev        # local dev server
npm test           # unit tests
npm run lint       # oxlint
npm run build      # type-check and production build into dist/
```

## Content

All copy (bio, experience, projects, skills) lives in [`src/data/profile.ts`](src/data/profile.ts). The components only handle layout.

Source photos live in `images-src/`. After replacing one, run `npm run images` to regenerate the optimized WebP files and the social preview card.

## Deploy

CI runs lint, tests and a build on every push and pull request. Publishing to thanahr.com is manual: either run the **Deploy** workflow from the Actions tab, or run `npm run deploy` locally. Both publish `dist/` to the `gh-pages` branch.
