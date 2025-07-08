# Polylingo API - Natural Translation Backend

> 🚀 Backend for Polylingo: a translation app focused on real-life, natural language usage.

---

## 📌 Overview

This is the backend API for **Polylingo**, built with **Express.js (TypeScript)** and deployed using **Google Cloud Run**.  
The API handles translation requests, with a focus on conversational accuracy, slang, and nuance — designed to support language learners and global travelers.

---

## 🎯 Motivation

Many translation services fail to handle casual, slang-based expressions accurately.
This API supports **more natural translations**, especially for learners and travelers, by connecting to a language model–powered translation engine.

---

## 🛠️ Tech Stack

- Express.js (TypeScript)
- Zod (Request validation)
- GCP Cloud Run
- dotenv (Environment configuration)

---

## 🧪 Getting Started (Local Development)

### Prerequisites

- **Node.js** >= 18
- `.env` file with the following key:

```env
TRANSLATION_API_KEY=your_api_key_here
```

### Setup

```bash
git clone https://github.com/Yuji5117/polylingo-api.git
cd polylingo-api
npm install
npm run dev
```

---

## 🚀 Deployment (GCP Cloud Run)

This service is containerized and deployed to **Google Cloud Run** via **Artifact Registry (Docker)**.
Secrets are managed using **Google Secret Manager**.

```bash
gcloud run deploy polylingo \
--image asia-northeast1-docker.pkg.dev/<your-project-id>/polylingo-api-repo/polylingo \
--platform managed \
--region asia-northeast1 \
--allow-unauthenticated \
--set-secrets "API_KEY=api-key:latest,OPENAI_API_KEY=openai-api-key:latest"
```

---

## 📂 Folder Structure

```
polylingo-api/
├── src/
│ ├── controllers/ # Handle request logic
│ ├── libs/ # External API integrations (e.g., OpenAI)
│ ├── middleware/ # Logging, error handling, etc.
│ ├── routes/ # Route definitions
│ ├── services/ # Translation business logic
│ ├── utils/ # Utility/helper functions
│ ├── validations/ # Zod schemas for request validation
│ ├── app.ts # Express app configuration
│ ├── config.ts # App-wide constants and config
│ └── index.ts # Entry point
├── .env # Environment variable definitions
├── .gitignore
├── Dockerfile # For Cloud Run deployment
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🔗 Related Projects

- **Frontend (Flutter)** → [polylingo](https://github.com/Yuji5117/polylingo)
