# xrwvm-fullstack_developer_capstone
# 🚗 Cars Dealership — Full-Stack Capstone Project

## Repository Name
`xrwvm-fullstack_developer_capstone`

## Project Name
**Cars Dealership Web Application**

---

## 📌 Project Overview

**Cars Dealership** is a full-stack web application built for a national car retailer in the United States. The application allows users to browse dealership branches across the country, view customer reviews, and submit their own reviews — all through a responsive, modern interface.

This project was developed as part of the IBM Full-Stack Developer Professional Certificate Capstone.

---

## 👤 Developer

**GitHub Username:** [phngtuanminh](https://github.com/phngtuanminh)

**Repository URL:** [https://github.com/phngtuanminh/xrwvm-fullstack_developer_capstone](https://github.com/phngtuanminh/xrwvm-fullstack_developer_capstone)

---

## 🛠️ Technologies Used

### Frontend
- **React** — Component-based UI
- **HTML5 / CSS3 / Bootstrap** — Responsive design

### Backend
- **Django** — Main web framework & REST APIs
- **Flask** — Sentiment analysis microservice
- **Node.js / Express** — Dealership & reviews microservice

### Databases
- **SQLite** — Car and dealership data
- **MongoDB** — Reviews data (via Mongoose)

### DevOps & Cloud
- **Docker** — Containerization
- **Kubernetes** — Container orchestration
- **IBM Cloud Code Engine** — Serverless deployment
- **GitHub Actions** — CI/CD pipeline

---

## ✨ Features

- 🗺️ Browse all dealership locations across the U.S.
- 📝 View customer reviews for each dealership
- ✅ Register, log in, and submit reviews (authenticated users)
- 😊 Automatic sentiment analysis (Positive / Neutral / Negative) on reviews
- 📱 Fully responsive design for desktop and mobile

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│              React Frontend                 │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│            Django Backend (REST API)        │
│   - User authentication                     │
│   - Car & dealer management (SQLite)        │
└──────────┬──────────────────┬───────────────┘
           │                  │
┌──────────▼──────┐  ┌────────▼────────────────┐
│  Node.js / Mongo│  │  Flask Sentiment Service │
│  Reviews Service│  │  (Positive/Neutral/Neg.) │
└─────────────────┘  └─────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- Docker & Docker Compose

### Run Locally

```bash
# Clone the repository
git clone https://github.com/phngtuanminh/xrwvm-fullstack_developer_capstone.git
cd xrwvm-fullstack_developer_capstone

# Backend setup
cd server
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend setup
cd ../client
npm install
npm start
```

### Run with Docker

```bash
docker-compose up --build
```

---

## 📁 Project Structure

```
xrwvm-fullstack_developer_capstone/
├── client/                   # React frontend
│   ├── src/
│   │   ├── components/       # UI components
│   │   └── App.js
├── server/                   # Django backend
│   ├── djangoapp/            # Main app
│   ├── database/             # SQLite models
│   └── manage.py
├── sentimentAnalyzer/        # Flask microservice
├── dealerships/              # Node.js + MongoDB service
├── .github/workflows/        # GitHub Actions CI/CD
├── docker-compose.yml
└── README.md
```

---

## 🔄 CI/CD Pipeline

Automated with **GitHub Actions**:
- Linting on push
- Unit testing
- Docker image build & push
- Deployment to IBM Cloud Code Engine

---

## 📄 License

This project is for educational purposes as part of the IBM Full-Stack Developer Capstone.

---

*Built with ❤️ by [phngtuanminh](https://github.com/phngtuanminh)*
