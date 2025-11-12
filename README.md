# **Microservices DevOps Project**
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Helm](https://img.shields.io/badge/Helm-0F1689?style=flat&logo=helm&logoColor=white)](https://helm.sh/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat&logo=grafana&logoColor=white)](https://grafana.com/)

A scalable microservices application with DevOps practices: containerization, Kubernetes, CI/CD, GitOps, and monitoring.

# **Overview**
Full-stack microservices on AWS EKS, including API gateway, user, product, and notification services. Emphasizes security, observability, and automated deployments.

# **Architecture**

![Architecture Diagram](architecture/architecture.PNG)

Services: API Gateway, User Service, Product Service, Notification Service.
Flow: GitHub → GitHub Actions → Docker Hub → ArgoCD → EKS → Prometheus/Grafana | Splunk.

# **Key Features**
Modular microservices with REST APIs.
CI/CD: Automated builds, Trivy scans, SonarQube checks.
Monitoring: Prometheus metrics, Grafana dashboards.
Logging: Centralized with Splunk.
GitOps: ArgoCD for deployments.

# **Technologies**
Version Control: GitHub
Containerization: Docker, Docker Hub
Orchestration: Kubernetes (EKS), Helm
CI/CD: GitHub Actions
GitOps: ArgoCD
Cloud: AWS (EKS)
Security: Trivy, SonarQube
Monitoring: Prometheus, Grafana
Logging: Splunk

# **Prerequisites**
Docker (v20+)
kubectl
Helm (v3+)
AWS CLI (EKS access)
GitHub account
SonarQube server
Splunk instance

# **Installation**
Clone repo: git clone https://github.com/your-username/your-repo.git && cd your-repo
Build/Push images: docker build -t your-username/service:latest ./services/service && docker push your-username/service:latest (repeat for each service)
Deploy to EKS: Update Helm values in charts/, then helm install my-app ./charts
Set up ArgoCD: Install on EKS, create app pointing to charts/ directory.
Monitoring: helm repo add prometheus-community https://prometheus-community.github.io/helm-charts && helm install prometheus prometheus-community/prometheus && helm install grafana stable/grafana
Logging: Configure Splunk HEC in services.

# **Usage**
Local: docker-compose up
Access: Via EKS LoadBalancer URL (e.g., http://api-gateway.example.com)
Monitoring: Grafana at http://grafana.example.com (admin/admin)
CI/CD: Push to main branch triggers GitHub Actions → ArgoCD deployment.
Helm Chart Example (values.yaml)


```
  repository: your-username/user-service
  tag: latest
replicaCount: 3
```

# **Contributing**
Fork repo.
Create branch: git checkout -b feature/new-service
Commit: git commit -m 'Add new service'
Push and open PR.
Ensure scans pass (SonarQube, Trivy).

# **License**
MIT License - see LICENSE file.

For issues, open a GitHub issue.
