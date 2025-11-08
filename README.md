# Frontend-Backend Docker Demo

A full-stack demo project showcasing a Dockerized **frontend** (HTML + Nginx) and **backend** (Node.js + Express) microservice setup. This project demonstrates containerization, networking, and inter-service communication—perfect for a Senior DevOps portfolio.

---

## 🚀 Project Features

- **Frontend** served via Nginx.
- **Backend** using Node.js and Express.
- **Inter-container communication** over a Docker bridge network.
- **Docker Compose** orchestration.
- **Logging** via `morgan` in backend.
- **Portable and reproducible setup** using Docker.

---

## 📁 Project Structure


---

## 🛠 Prerequisites

- Docker Desktop (Windows/macOS) or Docker Engine (Linux)
- Node.js (optional, for local testing)

---

## ⚡ Quick Start with Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/lutherdpage/frontend-backend-docker-demo.git
cd frontend-backend-docker-demo

docker-compose up --build

http://localhost:8080
Manual Docker Run (Optional)
Create a network:
docker network create app-network

Start backend:
docker build -t backend:latest ./backend
docker run -d --name backend-container --network app-network -p 3000:3000 backend:latest

Start frontend:
docker build -t frontend:latest ./frontend
docker run -d --name frontend-container --network app-network -p 8080:80 frontend:latest

📝 Backend Code Example
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});

🌐 Frontend Code Example
<button id="fetch-btn">Fetch Backend Message</button>
<p id="message"></p>

<script>
document.getElementById('fetch-btn').onclick = async () => {
    try {
        const res = await fetch('http://backend-container:3000/');
        const text = await res.text();
        document.getElementById('message').innerText = text;
    } catch (err) {
        document.getElementById('message').innerText = 'Failed to load backend message.';
        console.error(err);
    }
};
</script>

🎯 Why This Project is Impressive for DevOps

Demonstrates containerization best practices.

Shows ability to connect multiple services via Docker networks.

Includes logging and observability in backend.

Can easily be extended for Kubernetes deployments using the included manifests.

Provides a clear and reproducible setup for evaluation by hiring managers.

📌 License

This project is open-source and available under the MIT License
.


---

If you want, I can also **enhance this README** with **screenshots, diagrams, and badges** so it looks **production-ready and visually appealing** for recruiters and senior DevOps hiring managers.  

Do you want me to do that next?
