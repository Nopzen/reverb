# Reverb

Open Source people management tool, built in the open for leaders and people to safely have efficient and impactful conversations.

## Architecture

This is a monorepo setup using [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/) for package management.

### Structure

```
reverb/
├── apps/
│   ├── web/          # React frontend application
│   └── api/          # NestJS backend API
└── packages/         # Shared packages (future use)
```

### Applications

#### Frontend (apps/web)
- **Technology**: Vue with TypeScript
- **Port**: http://localhost:5000
- **Description**: Web application frontend

#### Backend (apps/api)  
- **Technology**: NestJS with TypeScript
- **Port**: http://localhost:3000
- **Description**: Application backend Rest API
- **Endpoints**:
  - `GET /` - Returns "Hello World!"
  - `GET /health` - Returns health status with service information

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Build all applications
pnpm build

# Start development servers for all apps
pnpm dev

# Clean build artifacts
pnpm clean
```

### Development

#### Available Commands

- `pnpm build` - Build all applications
- `pnpm dev` - Start all applications in development mode
- `pnpm test` - Run tests for all applications
- `pnpm lint` - Lint all applications  
- `pnpm clean` - Clean build artifacts

### API Endpoints

#### Health Check
```bash
curl http://localhost:3000/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2025-09-13T07:35:17.786Z",
  "message": "Reverb API is healthy",
  "service": "reverb-api",
  "version": "1.0.0"
}
```

### Technology Stack

- **Build System**: Turborepo
- **Package Manager**: pnpm  
- **Frontend**: Vue, TypeScript
- **Backend**: NestJS, TypeScript
- **Development**: Hot reload for both frontend and backend
