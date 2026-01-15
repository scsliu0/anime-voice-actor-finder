# Anime Voice Actor Finder

Discover which anime characters share the same voice actor. Search for any anime and explore the voice actor connections across different series.

## Tech Stack

- **Frontend**: [TanStack Start](https://tanstack.com/start) (React + Vite)
- **Backend**: [Convex](https://convex.dev) (real-time database & serverless functions)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **API**: [Jikan API](https://jikan.moe) (MyAnimeList unofficial API)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0+)
- [Node.js](https://nodejs.org) (v20+)

### Installation

```bash
# Install dependencies
bun install

# Start Convex development server (in one terminal)
bunx convex dev

# Start the app (in another terminal)
bun --bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── src/
│   ├── routes/         # File-based routing
│   ├── components/     # React components
│   └── lib/            # Utilities
├── convex/             # Backend functions & schema
├── public/             # Static assets
└── docs/               # Project documentation
```

## Development

- `bun --bun run dev` - Start development server
- `bun --bun run build` - Build for production
- `bun --bun run test` - Run tests
- `bunx convex dev` - Start Convex in development mode

