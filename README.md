# Cubetimer
A timer for timing Rubik's cube solves.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Add components
Using the shadcn cli we can add components to the project. Be sure to replace `[component]` with the name of the component you want to add.
```bash
npx shadcn@latest add [component]
```

# Project dependancies explanation

The `package.json` contains metadata about the project and lists the dependencies required for the project to run. Below is an explanation of the purpose of each dependency listed in the `package.json` file for the `cubetimer` project.

## Scripts

```bash
# Runs the development server using Next.js with Turbopack.
pnpm dev

# Builds the project for production using Next.js.
pnpm build

# Starts the production server using Next.js.
pnpm start

# Opens the Cypress test runner.
pnpm run cypress:open

# Opens the Cypress test runner.
# TODO: fix this
pnpm run test

# Builds the project and then starts the production server, useful for e2e testing.
pnpm run build-and-start

# lint: Lints the codebase using ESLint.
pnpm run lint
```
## Dependencies
### Shadcn dependencies:
- **@radix-ui/react-menubar**: A React component library for building accessible menubars.
- **@radix-ui/react-slot**: A utility for creating slot-based components in React.
- **class-variance-authority**: A utility for managing class names in a type-safe way.
- **clsx**: A utility for constructing `className` strings conditionally.
- **lucide-react**: A collection of simple and consistent icons for React.
### Nextjs dependencies:
- **next**: The Next.js framework for building React applications.
- **next-themes**: A library for managing themes in Next.js applications.
- **react**: The core React library for building user interfaces.
- **react-dom**: The React library for working with the DOM.
### Frontend dependencies:
- **tailwind-merge**: A utility for merging Tailwind CSS classes.
- **tailwindcss-animate**: A plugin for adding animations to Tailwind CSS.

## DevDependencies
- **@types/node**: TypeScript definitions for Node.js.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **cypress**: A testing framework for end-to-end testing.
- **eslint**: A tool for identifying and fixing problems in JavaScript code.
- **eslint-config-next**: ESLint configuration for Next.js projects.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **start-server-and-test**: A utility for starting a server and running tests.
- **tailwindcss**: A utility-first CSS framework.
- **typescript**: A superset of JavaScript that adds static types.