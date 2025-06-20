# 📝 MERNboard
![GitHub repo size](https://img.shields.io/github/repo-size/Adytia855/MERNboard)
![GitHub last commit](https://img.shields.io/github/last-commit/Adytia855/MERNboard)
![GitHub issues](https://img.shields.io/github/issues/Adytia855/MERNboard)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Adytia855/MERNboard)
![License: MIT](https://img.shields.io/github/license/Adytia855/MERNboard)
![Made with MERN](https://img.shields.io/badge/Stack-MERN-blueviolet)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
![Upstash](https://img.shields.io/badge/API%20Rate%20Limit-Upstash%20Redis-red?logo=redis)

MERNboard is a full-stack web application for simple note-taking. Built using the **MERN** stack (MongoDB, Express.js, React, Node.js), it allows users to **create**, **read**, **update**, and **delete** notes with a clean, modern interface.
![UI Preview](client/public/preview.jpg)
---


## ✨ Features

- ✅ **Create, Read, Update, Delete (CRUD)** notes
- 🧠 **MERN Stack** (MongoDB, Express.js, React + Vite, Node.js)
- 🚦 **API Rate Limiting** with Upstash Redis (100 req/min/user)
- 🎨 **Modern UI** with Tailwind CSS + DaisyUI
- ⚡ **Instant Feedback** using react-hot-toast
- 🔀 **Client-side Routing** with React Router
- 🔐 **Custom Middleware** (rate limiter)
- 🔄 **Reusable Components**: Navbar, NoteCard, etc.


## 🏗️ Tech Stack

### 🔹 Frontend

- React (via Vite)
- Tailwind CSS + DaisyUI
- Axios
- React Router DOM
- React Hot Toast
- Lucide React

### 🔸 Backend

- Node.js + Express.js
- MongoDB (with Mongoose)
- RESTful API (`/api/notes`)
- Upstash Redis (for rate limiting)
- CORS middleware

---

## 🧱 Folder Structure (Mermaid)

```mermaid
graph TD
  A[MERNboard]
  A --> B[client/]
  B --> B1[public/]
  B --> B2[src/]
  B2 --> B21[api/]
  B2 --> B22[components/]
  B2 --> B23[pages/]
  B2 --> B24[App.jsx]
  B2 --> B25[main.jsx]
  B2 --> B26[index.css]
  A --> C[server/]
  C --> C1[controllers/]
  C --> C2[models/]
  C --> C3[routes/]
  C --> C4[middlewares/]
  C --> C5[.env]
  C --> C6[server.js]
  A --> D[.gitignore]
  A --> E[README.md]
  A --> F[package.json]
```

---

## 🛍️ User Flow

### 1. View Notes

- GET `/api/notes` → fetch and display all notes

### 2. Create Note

- POST `/api/notes` → user inputs title & content, then saves

### 3. View/Edit Note

- GET `/api/notes/:id` → fetch single note
- PUT `/api/notes/:id` → update note fields

### 4. Delete Note

- DELETE `/api/notes/:id` → removes selected note

All routes are protected by a custom **rate limiter**.

---

## 🚦 API Rate Limiting

- **Service:** [Upstash Redis](https://upstash.com/)
- **Strategy:** Sliding window algorithm
- **Limits:** 100 requests / 60 seconds / IP or user key
- **Custom Middleware:** Blocks excessive requests with `429 Too Many Requests`

---

## ⚙️ Backend Flow: Create Note

1. Request hits `POST /api/notes`
2. Middleware: `cors`, `express.json()`, `rateLimiter`
3. Controller `addNote` extracts `title` & `content` from `req.body`
4. Mongoose saves a new `Note` to MongoDB
5. Server responds with success (`201`) or error (`500`)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm
- MongoDB URI (e.g., MongoDB Atlas)
- Upstash Redis credentials

### 📅 Installation

```bash
# Clone the project
git clone https://github.com/Adytia855/MERNboard.git
cd MERNboard

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 🛠️ Running Locally

```bash
# Start the backend server
cd server
npm run dev

# Start the frontend dev server
cd ../client
npm run dev
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri_here
UPSTASH_REDIS_REST_URL=your_upstash_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here
```

---

## 📜 License

MIT License © 2025 [Adytia855](https://github.com/Adytia855)

---

## 🙌 Acknowledgements

- Tailwind CSS
- DaisyUI
- React Hot Toast
- Lucide Icons
- Upstash

---

> *“Built with love and learning by Adytia.”*

