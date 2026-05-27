# Portfolio Monorepo

A single repository containing both the frontend and backend.

```
portfolio/
├─ frontend/   # Next.js app (App Router, TypeScript) — UI on http://localhost:3000
└─ backend/    # Express + TypeScript API — server on http://localhost:4000
```

Each folder is an independent project with its own `package.json` and dependencies.

## Setup

Install dependencies in each folder:

```powershell
cd backend;  npm install
cd ../frontend; npm install
```

Copy the example env files:

```powershell
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

## Running (two terminals)

```powershell
# terminal 1 — backend
cd backend; npm run dev      # http://localhost:4000

# terminal 2 — frontend
cd frontend; npm run dev     # http://localhost:3000
```

Open http://localhost:3000 — the home page fetches `/api/projects` from the backend.
