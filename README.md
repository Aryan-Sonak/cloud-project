# ☁️ CloudNotes: Serverless Markdown Utility

A lightweight, full-stack cloud application demonstrating **Serverless Architecture** and **Edge Computing** principles.

## 🚀 Overview
This project is built to showcase a decoupled frontend-backend architecture deployed on the cloud. It allows users to draft markdown notes and process them through a serverless backend without the overhead of a traditional persistent server.

## 🛠️ Tech Stack
* **Frontend:** HTML5, Tailwind CSS (via CDN)
* **Backend:** Node.js Serverless Functions
* **Deployment:** Vercel (Cloud Infrastructure)
* **Routing:** Custom `vercel.json` rewrite rules

## 📁 Project Structure
* `/frontend`: Contains the client-side user interface.
* `/backend/api`: Contains the serverless logic triggered on-demand.
* `vercel.json`: Handles the cloud routing and monorepo configuration.

## ☁️ Cloud Features
* **Serverless Execution:** The backend only runs when a request is made, reducing cold-start latency and cost.
* **Global Distribution:** Deployed to Vercel's Edge Network for low-latency response times globally.
* **Decoupled Architecture:** Separation of concerns between the UI and the processing logic.

## 🔧 Installation & Deployment
1. Clone the repository.
2. Connect to your Vercel account.
3. Deploy directly using the Vercel GitHub integration.

---
*Created for Cloud Computing Project Portfolio.*
