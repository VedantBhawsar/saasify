# SaaSify Backend

A multi-tenant SaaS backend built with TypeScript, Fastify, Prisma, and Redis.

## Features

- 🏢 Multi-tenancy support
- 🔐 JWT authentication
- 💳 Stripe billing integration
- 📧 Multi-channel notifications (Email, SMS, Push)
- 🔄 Background job processing with BullMQ
- 🐳 Docker containerization
- ☸️ Kubernetes deployment ready
- 🧪 Comprehensive testing setup

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Cache/Queue**: Redis with BullMQ
- **Authentication**: JWT
- **Payments**: Stripe
- **Infrastructure**: Docker, Kubernetes, Terraform

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Redis
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Set up the database:
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Start the worker (in another terminal):
   ```bash
   npm run worker:dev
   ```

## Project Structure

```
saasify-backend/
├── infra/                    # Infrastructure as code
├── src/
│   ├── api/                  # REST API routes
│   ├── bootstrap/            # Application bootstrapping
│   ├── config/               # Configuration management
│   ├── core/                 # Core business logic
│   ├── jobs/                 # Background jobs
│   ├── libs/                 # Shared libraries
│   ├── services/             # Business services
│   ├── events/               # Event handling
│   ├── webhooks/             # Webhook delivery
│   ├── utils/                # Utilities
│   └── types/                # Type definitions
├── scripts/                  # Development scripts
├── tests/                    # Test suites
└── tools/                    # Development tools
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run worker` - Start background worker
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run test` - Run tests
- `npm run lint` - Lint code

## API Documentation

The API follows RESTful conventions with the following endpoints:

- `GET /health` - Health check
- `POST /api/v1/auth/login` - User authentication
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/tenants` - List tenants
- `POST /api/v1/tenants` - Create tenant
- `GET /api/v1/billing/subscription` - Get subscription
- `POST /api/v1/notifications` - Send notification

## Deployment

### Docker

```bash
docker build -f infra/docker/Dockerfile.app -t saasify-backend .
docker run -p 3000:3000 saasify-backend
```

### Kubernetes

```bash
kubectl apply -f infra/k8s/
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License