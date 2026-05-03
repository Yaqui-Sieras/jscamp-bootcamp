# AGENTS.md

## Repo Structure

This is a **pnpm workspace monorepo** for a JavaScript bootcamp. Each `ejercicios/*` folder is an independent package.

```
jscamp-bootcamp/
├── ejercicios/
│   ├── 01-html-css/
│   ├── 02-javascript/
│   ├── 03-react/
│   ├── 04-router-and-zustand/
│   ├── 05-express/      # Express API (port 1234)
│   ├── 05-node/
│   ├── 06-testing/
│   ├── 07-typescript/
│   └── 08-inteligencia-artificial/
├── package.json       # Root workspace config
├── pnpm-workspace.yaml
├── .nvmrc            # Node.js LTS
├── .npmrc            # pnpm config
├── eslint.config.js    # Root ESLint config
└── prettier.config.cjs # Root Prettier config
```

## Developer Commands

Run commands **from within the specific exercise directory**, not the root:

```bash
cd ejercicios/05-express
pnpm dev    # node --watch app.js
pnpm start # node app.js
pnpm lint   # eslint .
```

Root-level commands:

```bash
pnpm lint         # lint all packages
pnpm format       # prettier --write .
pnpm reset        # clean node_modules + locks + reinstall
```

## Node Version

**LTS** (defined in `.nvmrc`: `lts-latest`)

## Key Packages

| Package        | Type | Notes                             |
| -------------- | ---- | --------------------------------- |
| 05-express     | ESM  | Express API, Zod, CORS, port 1234 |
| 05-node        | ESM  | Node.js ESM modules               |
| 06-testing/e2e | ESM  | Playwright                        |
| 08-ia/backend  | ESM  | AI Express API                    |
| 08-ia/frontend | ESM  | React + Vite                      |

## Package.json Standard

All packages follow this structure:

```json
{
  "name": "<folder-name>",
  "type": "module",
  "engines": { "node": ">=18.11.0" },
  "scripts": {
    "dev": "node --watch <entry>.js",
    "start": "node <entry>.js",
    "lint": "eslint .",
    "test": "echo 'Error: no test specified' && exit 1"
  }
}
```

## Important Files

- `.nvmrc` - Node version (use `nvm use` to switch)
- `.npmrc` - pnpm configuration (engine-strict, auto-install-peers)
- `pnpm-workspace.yaml` - Workspace packages
