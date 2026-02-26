## Copilot / AI Instructions for this repo

Purpose: Give succinct, actionable guidance so an AI coding agent is immediately productive in this React + Vite project.

- **Quick commands**:
  - Install & run dev server: `npm install` then `npm run dev` (Vite dev server with HMR).
  - Build: `npm run build`.
  - Preview build: `npm run preview`.
  - Lint: `npm run lint`.

- **Project shape (big picture)**:
  - Root: single-page React app using Vite. Entry point is `src/main.jsx` which mounts `src/App.jsx`.
  - UI components live in `src/` as paired files: `component.jsx` + `component.css` (e.g., `encabezado.jsx` + `Encabezado.css`).
  - Static/public assets: `public/` and `src/assets/`.
  - HTTP client layer: `src/services/api.js` exports a configured `axios` instance. Use this for all network calls.

- **Important conventions & patterns**:
  - Environment variables use Vite's `import.meta.env` and must be prefixed with `VITE_` (see `src/services/api.js`). Example: `VITE_API_URL`.
  - `src/services/api.js` sets `baseURL` from `import.meta.env.VITE_API_URL` and provides a development fallback to `https://fakestoreapi.com/`.
  - Files use `.jsx` for React components; keep component-local CSS files next to the component and follow existing naming.
  - The project uses `@react-google-maps/api` for maps; inspect `mapa.jsx` and `mapaGeolocalizacion.jsx` for usage patterns.

- **Where to look for common tasks**:
  - Add new HTTP endpoints / change API base URL: update `src/services/api.js` and set `VITE_API_URL` in `.env`.
  - Add new pages/components: follow existing pattern — create `X.jsx` and `X.css` in `src/` and import in `App.jsx`.
  - Global styles: `index.css` and component-level CSS files.

- **Build / debug notes an agent should know**:
  - Use `npm run dev` to get fast feedback; Vite provides HMR and sourcemaps by default.
  - Environment variables are read at build/dev time — changing `.env` requires restarting the dev server.
  - If `VITE_API_URL` is missing, `src/services/api.js` will log a warning and use the fallback.

- **Dependency & integration points**:
  - Key deps: `react`, `react-dom`, `vite`, `axios`, `@react-google-maps/api`.
  - ESLint configured via project `lint` script; follow current rules when editing files.

- **Do not assume**:
  - There are no unit tests or test runner configured in this repo — do not add test assumptions without adding tooling.
  - Secrets should not be hard-coded. Use `VITE_` env variables for API URLs/keys.

- **Examples (copyable snippets)**:
  - Set API env var in local `.env`:

    VITE_API_URL=https://api.example.com/

  - Use the shared axios instance:

    import api from './services/api';
    const resp = await api.get('/products');

- **Files to inspect for further patterns**:
  - `src/services/api.js` — axios instance + fallback example
  - `src/main.jsx` and `src/App.jsx` — app entry and routing/compose
  - `vite.config.js` — Vite plugins (currently `@vitejs/plugin-react`)
  - `package.json` — scripts: `dev`, `build`, `preview`, `lint`

If anything here is unclear or you'd like the file to use Spanish examples/comments instead, tell me which sections to adjust.
