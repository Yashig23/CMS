# LaunchPad Monorepo

A monorepo with a React + Vite + Tailwind frontend and an Express backend.

## Structure

```
├── frontend/   # React landing page (Vite + Tailwind)
├── backend/    # Express API server
└── package.json
```

## Getting Started

Install dependencies from the root:

```bash
npm install
```

Run both frontend and backend in development:

```bash
npm run dev
```

Or run them individually:

```bash
npm run dev:frontend   # http://localhost:5173
npm run dev:backend    # http://localhost:3001
```

## API

| Endpoint         | Description        |
| ---------------- | ------------------ |
| `GET /api/health`   | Health check       |
| `GET /api/features` | Feature list data  |

The frontend proxies `/api/*` requests to the backend during development.

## Build

```bash
npm run build
```
