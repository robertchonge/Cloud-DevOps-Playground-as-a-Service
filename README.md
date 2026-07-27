# Cloud DevOps Playground-as-a-Service

A full-stack, containerised platform that allows users to launch isolated cloud-native environments for learning, testing, and demonstrating DevOps workflows.

The platform provides on-demand sandboxes where users can experiment with CI/CD pipelines, Kubernetes deployments, Docker orchestration, infrastructure automation, and other cloud engineering practices through a web-based dashboard.

---

## Why This Project?

Modern cloud infrastructure requires practical experience with deployment workflows, automation, and system operations. This project provides accessible DevOps environments without requiring users to configure complex infrastructure locally.

Designed for:

- Students and developers learning DevOps
- Teams testing infrastructure-as-code workflows
- Technical interviews and live demonstrations
- Bootcamp and training environments

---

## Key Features

### On-Demand DevOps Sandboxes

Users can create isolated Docker or Kubernetes-based environments with preconfigured tools and resources.

### Prebuilt DevOps Templates

Launch ready-to-use environments containing popular DevOps technologies:

- Jenkins
- GitLab CI
- Docker
- Kubernetes tools
- Helm
- Terraform

### Web Terminal and File Editor

Interact with running environments directly from the browser through web-based terminals and development tools.

### Authentication and Resource Management

Includes:

- User roles and permissions
- Time-limited sessions
- Resource restrictions
- Sandbox lifecycle management

### Monitoring Dashboard

Provides visibility into:

- Active environments
- Resource usage
- Sandbox status
- User activity logs

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Next.js, Tailwind CSS |
| Backend API | Django REST Framework or Node.js Express |
| Container Platform | Docker, Kubernetes (K3s/MicroK8s) |
| Infrastructure Provisioning | Terraform, Ansible |
| Web Terminal | xterm.js, ttyd, GoTTY |
| Authentication | JWT, Auth0, Firebase Authentication |
| Storage | S3-compatible storage, MinIO |
| Deployment | Docker Compose, Helm |

---

## Project Structure

```
devops-playground/

├── backend/              # API and sandbox lifecycle management
│   └── provisioner/      # Terraform or automation scripts
│
├── frontend/             # Web dashboard application
│
├── docker/               # Dockerfiles and Compose templates
│
├── templates/            # Prebuilt DevOps environments
│
├── k8s/                  # Kubernetes deployment configuration
│
└── README.md
```

---

## How It Works

1. User authenticates and selects a DevOps environment template.
2. Backend provisions an isolated sandbox using Docker or Kubernetes.
3. Required tools and configurations are injected automatically.
4. User accesses the environment through a browser-based terminal.
5. Sandbox resources are automatically cleaned up after expiration.

---

## Local Setup

### Backend

```bash
cd backend
docker-compose up --build
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Templates

Each template directory contains configuration required to initialise a sandbox environment.

Example:

```
templates/

├── docker-jenkins/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── startup.sh

├── kubernetes-lab/
│   ├── kustomize.yaml
│   └── deployment.yaml
```

Templates can include:

- Dockerfiles
- Docker Compose configurations
- Startup scripts
- Terraform files
- Kubernetes manifests

---

## UI Screenshots

The project includes:

- Dashboard interface showing available environments and sandbox status
- Web terminal interface for interacting with running containers

---

## API Endpoints

Example API routes:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/sandboxes/` | Launch a new sandbox |
| GET | `/api/sandboxes/active/` | List active sessions |
| DELETE | `/api/sandboxes/:id/` | Destroy a sandbox |
| GET | `/api/templates/` | List available environments |

---

## Future Improvements

- Automatic cleanup of inactive environments
- Subscription and billing system
- GitHub integration for pull request testing
- Browser-based code editor using Monaco
- Terminal session recording and playback
- Advanced multi-user collaboration

---

## Deployment Architecture

Recommended deployment:

- Kubernetes cluster (DigitalOcean, GKE, or local K3s)
- Nginx or Traefik reverse proxy
- Persistent volumes for environment state
- Prometheus and Grafana monitoring stack

---

## Security Considerations

The platform should include:

- Container isolation using namespaces or lightweight VMs
- CPU and memory limits per user
- Expiring authentication tokens
- Audit logging
- Secure sandbox networking

---

## License

MIT License

Free to use, modify, and distribute.

---

## Maintainer

Robert Chonge

Email: robertchonge07@gmail.com

---

## Live Demo

Coming soon.

Deployment planned using cloud infrastructure with Kubernetes ingress and managed container environments.
