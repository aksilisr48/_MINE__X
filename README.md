# OCP Horizon View

This is a standalone Next.js version of the OCP Horizon View dashboard.

The dashboard source now lives in the Next.js app files:

- `app/globals.css` contains the extracted styles.
- `app/ocpvs/markup.js` contains the page markup.
- `app/ocpvs/original-script.js` contains the browser interactions, wrapped for Next.js client-side execution.
- `app/ocpvs/OcpHorizonView.jsx` renders the dashboard and attaches the interactions.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open:

```text
http://localhost:3000
```
